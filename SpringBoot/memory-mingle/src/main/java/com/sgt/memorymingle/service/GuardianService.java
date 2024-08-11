package com.sgt.memorymingle.service;

import com.sgt.memorymingle.repository.GuardianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.RequestBody;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GuardianService
{
    @Autowired
    GuardianRepository guardianRepository;

    public ResponseEntity<Map<String,String>> registerGuardian( Map<String,Object> body)
    {




        String name=(String) body.get("name");
        String email=(String)body.get("email");
        String password=(String)body.get("password");
        String childName=(String)body.get("childName");
        String dob=(String)body.get("dob");


        int noOfRows=guardianRepository.registerGuardian(name,email,password,childName,dob);

        if(noOfRows > 0)
        {
            return ResponseEntity.ok(Map.of("status","Successfull"));
        }
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(Map.of("status","Failed"));

    }


//    public ResponseEntity<Map<String,String>> registerUser( Map<String,Object> body)
//    {
//
//
//
//
//        int guardian_id=(int) body.get("guardian_id");
//        String user_name=(String)body.get("user_name");
//        String date_of_birth=(String)body.get("date_of_birth");
//
//
//
//        int noOfRows=guardianRepository.registerUser(guardian_id,user_name,date_of_birth);
//
//        if(noOfRows > 0)
//        {
//            return ResponseEntity.ok(Map.of("status","Successfully registered user"));
//        }
//        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(Map.of("status","Failed"));
//
//    }



    public Map<String,Object> loginGuardian(Map<String,Object> body)
    {

        String username=(String) body.get("username");
        String password=(String)body.get("password");
        Map<String,Object> map= guardianRepository.loginGuardian(username,password);
        System.out.println(map);

        int validYN = (int) map.get("validYN");
        if(validYN==0)
        {
    return map;
        }
        int g_id= (int) map.get("g_id");
        if(validYN==1)
        {
            int time_left=get_time(g_id);
            map.put("time_left", time_left);
        }
        System.out.println("After putting time_left");
        System.out.println(map);
        return map;
    }
    public int get_time(int g_id)
    {
        Map<String,Object> map= guardianRepository.get_time(g_id);
        System.out.println(map);
        int time_left=(int) map.get("time_left");;
        return time_left;
    }



    public List<Map<String,Object>> getGameData()
    {
        return guardianRepository.getGameData();
    }

    public Map<String,Object> getInstructions(String slug)
    {
        Map<String,Object> map=guardianRepository.getInstructions(slug);
        System.out.println(map);
        return map ;
    }


    public Map<String,Object> getDataOflevel( Map<String,Object> body)
    {

        int game_id = Integer.parseInt(String.valueOf(body.get("game_id")));
        System.out.println(game_id);

        int level_no = Integer.parseInt(String.valueOf(body.get("level_no")));
        System.out.println(level_no);
        return guardianRepository.getDataOflevel(game_id,level_no);

    }


    public ResponseEntity<Map<String,String>> insertProgressOfUser( Map<String,Object> body)
    {
        int user_id=Integer.parseInt(String.valueOf(body.get("user_id")));

        int points=Integer.parseInt(String.valueOf(body.get("points")));

        int game_id=    Integer.parseInt(String.valueOf(body.get("game_id")));

        int level_id=Integer.parseInt(String.valueOf(body.get("level_no")));

        int gamewon=      Integer.parseInt(String.valueOf(body.get("game_won")));





        int noOfRows=guardianRepository.insertProgressOfUser(user_id,points,game_id,level_id,gamewon);

        if(noOfRows > 0)
        {
            return ResponseEntity.ok(Map.of("status","Successfully inserted the progress"));
        }
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(Map.of("status","Failed"));

    }


//    Fetching the images


    public Map<byte[],Integer>   getImages(Map<String,Object> body)

    {
        int game_id = Integer.parseInt(String.valueOf(body.get("game_id")));
        System.out.println(game_id);

        int level_no = Integer.parseInt(String.valueOf(body.get("level_no")));
        System.out.println(level_no);
        List<Map<String,Object>> imageUrls= guardianRepository.getImages(game_id,level_no);
        System.out.println(imageUrls);
//        return imageUrls;


        List<byte[]> imageBytesList = new ArrayList<>();
        Map<byte[],Integer> myMap=new HashMap<>();
        for (Map<String, Object> imageUrlMap : imageUrls) {
            String imageUrl = (String) imageUrlMap.get("image_url");
            int id=(int) imageUrlMap.get("id");
            System.out.println(imageUrl);
            System.out.println(id);

            try {
                File file = new File("memory-mingle/src/main/java/com/sgt/memorymingle/assets/" + imageUrl);
                byte[] imageBytes = Files.readAllBytes(file.toPath());
                System.out.println(imageBytes);
                imageBytesList.add(imageBytes);
                myMap.put(imageBytes,id);
            } catch (IOException e)
            {
                e.printStackTrace();
            }
        }

        System.out.println(myMap);
        return myMap;
    }

    public List<Map<String,Object>> getImagesId (Map<String,Object> body)
    {
        int game_id = Integer.parseInt(String.valueOf(body.get("game_id")));
        System.out.println(game_id);

        int level_no = Integer.parseInt(String.valueOf(body.get("level_no")));
        System.out.println(level_no);
        return guardianRepository.getImagesId(game_id,level_no);
    }


    public byte[] getImageUrlById (int id)
    {
        System.out.println(id);

        Map<String,Object> imageUrlMap= guardianRepository.ImageUrlById(id);
        String imageUrl = (String) imageUrlMap.get("image_url");
        byte[] imageBytes = null;
        try {
            File file = new File("memory-mingle/src/main/java/com/sgt/memorymingle/assets/" + imageUrl);
            imageBytes = Files.readAllBytes(file.toPath());
        } catch (IOException e)
        {
            e.printStackTrace();
        }
        return imageBytes;
    }

    public byte[] fetchImageOfGame (String image_url)
    {

        byte[] imageBytes = null;
        try {
            File file = new File("memory-mingle/src/main/java/com/sgt/memorymingle/assets/" + image_url);
            imageBytes = Files.readAllBytes(file.toPath());
        } catch (IOException e)
        {
            e.printStackTrace();
        }
        return imageBytes;
    }




    public Map<String,Object> guardianPortalLogin(Map<String,Object> body)
    {
        String username=(String) body.get("username");
        String password=(String)body.get("password");
        return guardianRepository.guardianPortalLogin(username,password);
    }




    public Map<String,Object> getChildData(Map<String,Object> body)
    {

        int user_id = Integer.parseInt(String.valueOf(body.get("user_id")));

        return guardianRepository.getChildData(user_id);

    }


    public List<Map<String,Object>> getChildGameData(Map<String,Object> body)
    {
        int user_id = Integer.parseInt(String.valueOf(body.get("user_id")));
        return guardianRepository.getChildGameData(user_id);
    }

    public List<Map<String,Object>> getProgress(Map<String,Object> body)
    {
        int user_id = Integer.parseInt(String.valueOf(body.get("user_id")));
        return guardianRepository.getProgress(user_id);
    }




    public Map<String,Object> getTime(Map<String,Object> body)
    {
        int g_id = Integer.parseInt(String.valueOf(body.get("g_id")));
        return guardianRepository.getTime(g_id);
    }



    public Map<String,Object> setTime(Map<String,Object> body)
    {
        int g_id = Integer.parseInt(String.valueOf(body.get("g_id")));
        int time = (int)body.get("time");

        return guardianRepository.setTime(g_id,time);
    }

    public Map<String,Object> setUpdatedTimeLeft(Map<String,Object> body)
    {
        int g_id = Integer.parseInt(String.valueOf(body.get("g_id")));
        int time = (int)body.get("time");
        return guardianRepository.setTime(g_id,time);
    }

    public List<Map<String,Object>> fetchPattern(Map<String,Object> body){
        int level = Integer.parseInt(String.valueOf(body.get("level")));
        return guardianRepository.fetchPattern(level);
    }
    public Map<String,Object>  changePassword(Map<String ,Object> body){
        int g_id = Integer.parseInt(String.valueOf(body.get("g_id")));
        String password = (String)body.get("password");
        return guardianRepository.changePassword(g_id,password);
}



    public List<Map<String,Object>> getProgressDataForCharts(Map<String,Object> body)
    {
        int user_id = Integer.parseInt(String.valueOf(body.get("user_id")));
        return guardianRepository.getProgressDataForCharts(user_id);
    }


}
