package resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

public class TestApi {
	
	@Path("/")
	@GET
	public String sayHello(){
	
			return "hello!!!";
	}
}
