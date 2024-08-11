package com.sgt.memorymingle.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class GuardianRepository
{
    @Autowired

    JdbcTemplate jdbcTemplate;


    public int registerGuardian(String name,String email,String password,String childName,String dob)
    {

        return jdbcTemplate.update("EXEC memory_games.sp_insert_guardian ?,?,?,?,?",name,email,password,childName,dob);


    }


//    public int registerUser(int guardian_id,String user_name,String date_of_birth)
//    {
//
//        return jdbcTemplate.update("EXEC memory_games.sp_insert_user ?,?,?",guardian_id,user_name,date_of_birth);
//
//
//    }


    public Map<String,Object> loginGuardian(String username,String password)
    {

        return jdbcTemplate.queryForMap("EXEC memory_games.sp_login_Guardian ?,?",username,password);

    }

    public Map<String,Object> get_time(int g_id)
    {
        return jdbcTemplate.queryForMap("EXEC  [memory_games].[sp_check_and_insert] ?",g_id);
    }

    public List<Map<String,Object>> getGameData()
    {
        return jdbcTemplate.queryForList("EXEC memory_games.sp_Fetch_game_details");
    }


    public Map<String,Object> getInstructions(String slug)
    {
        return jdbcTemplate.queryForMap("EXEC memory_games.sp_Fetch_game_instructions ?",slug);
    }


    public Map<String,Object> getDataOflevel(int game_id,int level_no)
    {
        return jdbcTemplate.queryForMap("EXEC memory_games.sp_Get_level_details ?,?",game_id,level_no);
    }


    public int insertProgressOfUser(int user_id,int points,int game_id,int level_id,int gamewon)
    {

        return jdbcTemplate.update("EXEC memory_games.sp_insert_progress_of_user ?,?,?,?,?",user_id,points,game_id,level_id,gamewon);


    }

    public List<Map<String,Object>> getImages(int game_id,int level_no)
    {
        return jdbcTemplate.queryForList("EXEC memory_games.sp_fetch_images ?,?",game_id,level_no);
    }

    public List<Map<String,Object>> getImagesId(int game_id,int level_no)
    {
        return jdbcTemplate.queryForList("EXEC memory_games.sp_fetch_images_id ?,?",game_id,level_no);
    }




    public Map<String,Object> ImageUrlById(int id)
    {
        return jdbcTemplate.queryForMap("EXEC memory_games.sp_fetch_images_url_by_id ?",id);
    }


    public Map<String,Object> guardianPortalLogin(String username,String password)
    {
        return jdbcTemplate.queryForMap("EXEC memory_games.sp_login_Guardian_portal ?,?",username,password);
    }



    public Map<String,Object> getChildData(int user_id)
    {
        return jdbcTemplate.queryForMap("EXEC [memory_games].[sp_get_Child_Data] ?",user_id);
    }
    public List<Map<String,Object>>  getChildGameData(int user_id)
    {
        return jdbcTemplate.queryForList("EXEC [memory_games].[sp_get_Child_Game_Data] ?",user_id);
    }



    public List<Map<String,Object>> getProgress(int user_id)
    {
        return jdbcTemplate.queryForList("EXEC [memory_games].[sp_fetch_progress_with_level] ?",user_id);


    }

    public List<Map<String,Object>> getProgressDataForCharts(int user_id)
    {
        return jdbcTemplate.queryForList("EXEC memory_games.sp_progress_for_charts ?",user_id);


    }



    public Map<String,Object> getTime(int g_id)
    {
        return jdbcTemplate.queryForMap("EXEC  [memory_games].[sp_fetch_constraint_time] ?",g_id);
    }

    public Map<String,Object>  setTime(int g_id,int time)
    {
        return jdbcTemplate.queryForMap("EXEC  [memory_games].[sp_update_daily_time] ?,?",g_id,time);
    }


    public Map<String,Object> setUpdatedTimeLeft(int g_id,int time)
    {
        return jdbcTemplate.queryForMap("EXEC  [memory_games].[sp_update_time_left] ?,?",g_id,time);
    }
    public List<Map<String,Object>> fetchPattern(int level)
    {
        return jdbcTemplate.queryForList("EXEC memory_games.sp_fetch_tile_pattern ?",level);
    }
    public Map<String,Object>  changePassword(int g_id,String password){
        return jdbcTemplate.queryForMap("[memory_games].[sp_change_password] ?,?",g_id,password);
}


}
