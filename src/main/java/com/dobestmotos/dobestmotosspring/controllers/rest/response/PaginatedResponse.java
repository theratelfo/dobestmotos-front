package com.dobestmotos.dobestmotosspring.controllers.rest.response;

import java.util.List;

public class PaginatedResponse<T> {
	
    private List<T> content;
    private int totalPages;
    
	public List<T> getContent() {
		return content;
	}
	public void setContent(List<T> content) {
		this.content = content;
	}
	public int getTotalPages() {
		return totalPages;
	}
	public void setTotalPages(int totalPages) {
		this.totalPages = totalPages;
	}      
}
