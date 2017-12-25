package com.lunablog.application;
import com.lunablog.exception.InvalidFileUrlException;
import com.lunablog.exception.UnacceptableContentException;
import com.lunablog.infrastructure.URLReader;

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
