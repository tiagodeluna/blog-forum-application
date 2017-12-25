package com.lunablog.api.infrastructure;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Authenticator;
import java.net.HttpURLConnection;
import java.net.InetSocketAddress;
import java.net.PasswordAuthentication;
import java.net.Proxy;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;

import com.lunablog.api.exception.InvalidFileUrlException;
import com.lunablog.api.exception.UnacceptableContentException;

/**
 * Reads the URL provided returning its content. 
 * @author tiago.luna
 *
 */
public class URLReader {

	private static final String CONTENT_TYPE = "text/plain";
	private static final String AUTH_USER = "zzz";
	private static final String AUTH_PASSWORD = "xxx";
	private HttpURLConnection connection;
	
	public URLReader() {
		super();
	}

	/**
	 * 
	 * @param path
	 * @return
	 * @throws UnacceptableContentException
	 * @throws InvalidFileUrlException
	 */
	public String read(String path) throws UnacceptableContentException, InvalidFileUrlException {
		//Checks whether the URL is valid or not
		this.validateURL(path);

		//Opens connection
		openConnection(path);
		
		//Checks whether the content is valid
		//FIXME ISSO TÁ DEMORANDO MUITO! Testar mais e melhorar abordagem...
		if (!connection.getContentType().contains(CONTENT_TYPE)) {
			throw new UnacceptableContentException();
		}
		
		try (BufferedReader in = new BufferedReader(
						new InputStreamReader(connection.getInputStream()))) {
			
			//Reads the URL content
			StringBuilder content = new StringBuilder();
			in.lines().forEach(line -> content.append(String.format("%s%n", line)));
			return content.toString();
			
		} catch (IOException e) {
			throw new UnacceptableContentException(e);
		} finally {
			closeConnection();
		}
	}

	private void validateURL(String url) throws InvalidFileUrlException {
		boolean isInvalid = false;
		
		try {
		    isInvalid = "".equals(url.trim())
					|| !(url.startsWith("http://") || url.startsWith("https://"))
					|| (new URI(url).getHost()) == null;
		} catch (URISyntaxException e) {
			throw new InvalidFileUrlException(url, e);
		}
		
		if (isInvalid) {
			throw new InvalidFileUrlException(url);
		}
	}

	private void openConnection(String url) throws InvalidFileUrlException {
		try {
			connection = (HttpURLConnection) new URL(url).openConnection();
			connection.setDoOutput(true);
			connection.setDoInput(true);
//			connection.setRequestProperty("Content-type", "text/xml");
			connection.setRequestProperty("Accept", CONTENT_TYPE);
			connection.setRequestMethod("GET");
		} catch (IOException e) {
			throw new InvalidFileUrlException(url, e);
		}
	}
	
	private void openConnectionWithProxy(String url) throws InvalidFileUrlException {
		Authenticator.setDefault(
		   new Authenticator() {
		      @Override
		      public PasswordAuthentication getPasswordAuthentication() {
		         return new PasswordAuthentication(
		               AUTH_USER, AUTH_PASSWORD.toCharArray());
		      }
		   }
		);

		System.setProperty("http.proxyUser", AUTH_USER);
		System.setProperty("http.proxyPassword", AUTH_PASSWORD);
		
		try {
			Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("psquiddf01.prevnet", 8080));
			connection = (HttpURLConnection) new URL(url).openConnection(proxy);
			connection.setDoOutput(true);
			connection.setDoInput(true);
//			connection.setRequestProperty("Content-type", "text/xml");
			connection.setRequestProperty("Accept", CONTENT_TYPE);
			connection.setRequestMethod("GET");
		} catch (IOException e) {
			throw new InvalidFileUrlException(url, e);
		}
	}
	
	private void closeConnection() {
		connection.disconnect();
		System.setProperty("http.proxyUser", "");
		System.setProperty("http.proxyPassword", "");
	}
	
}
