package com.xiaob.resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/")
public class TestApi {

	@GET
	@Path("/test")
	public String test(){
		return "hello jersey";
	}
}
