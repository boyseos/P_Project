package com.test.web.user;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/xx")
public class UserCtx {

	
	@GetMapping("/")
	public List<String> list(){
		List<String> xx = new ArrayList<>();
		xx.add("정묵만세");
		return xx;
	}
}
