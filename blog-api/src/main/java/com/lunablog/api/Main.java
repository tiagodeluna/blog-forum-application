package com.lunablog.api;
import com.lunablog.api.exception.InvalidFileUrlException;
import com.lunablog.api.exception.UnacceptableContentException;
import com.lunablog.api.infrastructure.URLReader;

public class Main {

	public static void main(String[] args) {
		String url = "http://www.google.com";
		url = "https://github.com/tiagodeluna/study-notes/blob/master/DevOps/devops-edx-course/README.md";
		url = "https://raw.githubusercontent.com/tiagodeluna/study-notes/master/DevOps/devops-edx-course/README.md";
		URLReader reader = new URLReader();

		try {
//			reader.read(url);
			System.out.println(reader.read(url));
		} catch (UnacceptableContentException | InvalidFileUrlException e) {
			System.err.println(e.getMessage());
//			e.printStackTrace();
		}
		
	}

}
