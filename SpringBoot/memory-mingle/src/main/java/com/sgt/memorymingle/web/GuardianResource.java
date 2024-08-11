package com.sgt.memorymingle.web;

import com.sgt.memorymingle.service.GuardianService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="http://localhost:4200",allowCredentials="true")

public class GuardianResource
{
    @Autowired
    GuardianService guardianService;

    @PostMapping("/register-guardian")
    public ResponseEntity<Map<String,String>> registerGuardian(@RequestBody Map<String,Object> body)
    {
        return guardianService.registerGuardian(body);
    }


//    @PostMapping("/register-user")
//    public ResponseEntity<Map<String,String>> registerUser(@RequestBody Map<String,Object> body)
//    {
//        return guardianService.registerUser(body);
//    }


    @PostMapping("/login")
    public Map<String,Object> loginGuardian(@RequestBody Map<String,Object> body)
    {
        return guardianService.loginGuardian(body);
    }

    @GetMapping("/getDataOfGame")
    public List<Map<String,Object>> getGameData()
    {
        return guardianService.getGameData();
    }

    @GetMapping("/getInstructions/{slug}")
    public Map<String,Object> getInstructions(@PathVariable String slug)
    {
        return guardianService.getInstructions(slug);
    }

    @PostMapping("/getDataOflevel")
    public Map<String,Object> getDataOflevel(@RequestBody Map<String,Object> body)
    {
        System.out.println(body);
        return guardianService.getDataOflevel(body);
    }


    @PostMapping("insertProgress")

    public ResponseEntity<Map<String,String>>insertProgressOfUser(@RequestBody Map<String,Object> body)
    {
        return guardianService.insertProgressOfUser(body);
    }


    @PostMapping("/getImages")
    public Map<byte[],Integer>   getImages(@RequestBody Map<String,Object> body)
    {
        return guardianService.getImages(body);
    }


    @PostMapping("/getImagesId")
    public List<Map<String,Object>>   getImagesId(@RequestBody Map<String,Object> body)
    {
        return guardianService.getImagesId(body);
    }


    @GetMapping("/fetchImageUrlById/{id}")
    public byte[]   getImageUrlById(@PathVariable int id)
    {
        return guardianService.getImageUrlById(id);
    }


    @GetMapping("/fetchImageOfGame/{image_url}")
    public byte[]   fetchImageOfGame(@PathVariable String image_url)
    {
        return guardianService.fetchImageOfGame(image_url);
    }

    @PostMapping("/guardianPortalLogin")
    public Map<String,Object> guardianPortalLogin(@RequestBody Map<String,Object> body)
    {
        return guardianService.guardianPortalLogin(body);
    }


    @PostMapping("/getChildData")
    public Map<String,Object> getChildData(@RequestBody Map<String,Object> body)
    {
        return guardianService.getChildData(body);
    }

    @PostMapping("/getChildGameData")
    public List<Map<String,Object>>  getChildGameData(@RequestBody Map<String,Object> body)
    {
        return guardianService.getChildGameData(body);
    }



    @PostMapping("/getProgress")
    public List<Map<String,Object>>  getProgress(@RequestBody Map<String,Object> body)
    {
        return guardianService.getProgress(body);
    }
    @PostMapping("/getTime")
    public Map<String,Object>  getTime(@RequestBody Map<String,Object> body)
    {
        return guardianService.getTime(body);
    }
    @PostMapping("/setTime")
    public Map<String,Object>  setTime(@RequestBody Map<String,Object> body)
    {
        return guardianService.setTime(body);
    }


    @PostMapping("/setUpdatedTimeLeft")
    public Map<String,Object>  setUpdatedTimeLeft(@RequestBody Map<String,Object> body)
    {
        return guardianService.setUpdatedTimeLeft(body);
    }
    @PostMapping("/get-pattern")
    public List<Map<String,Object>> fetchPattern(@RequestBody Map<String,Object> body){
        return guardianService.fetchPattern(body);
    }
    @PostMapping("/changePassword")
    public Map<String,Object> changePassword(@RequestBody Map<String,Object> body){
        return guardianService.changePassword(body);
}


    @PostMapping("/getProgressDataForCharts")
    public List<Map<String,Object>>  getProgressDataForCharts(@RequestBody Map<String,Object> body)
    {
        return guardianService.getProgressDataForCharts(body);
    }

}


