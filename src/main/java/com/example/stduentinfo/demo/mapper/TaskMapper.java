package com.example.stduentinfo.demo.mapper;

import com.example.stduentinfo.demo.entity.Studentinfo;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface TaskMapper {
    @Select( "select * from taskinfo where username = #{username}" )
    public List<Studentinfo> findByUsername(String username);

    @Select( "select username,password from taskinfo where username=#{username} and password=#{password}" )
    public Studentinfo findByUsernameAndPassword(@Param( "username" ) String username , @Param( "password" ) String password);

    @Insert( "insert into taskinfo(taskName,publicUser,status,startDate,endDate,reponsible) values(#{taskName},#{publicUser},#{status},#{startDate},#{endDate},#{reponsible})" )
    public void save( @Param ( "taskName" ) String username , @Param( "publicUser" ) String password , @Param( "status" ) String sex, @Param("startDate") String birthday , @Param( "endDate" ) String myself, @Param( "reponsible" ) String QQ);

    //多字段更新，只需要在单字段后面用逗号分隔来书写就行
    @Update( "update taskinfo set sex = #{sex},QQ=#{QQ},birthday=#{birthday},myself=#{myself}  where username=#{username}" )
    public void update(@Param( "sex" ) String sex,
                       @Param( "QQ" ) String QQ,
                       @Param( "birthday" ) String birthday,
                       @Param( "myself" ) String myself,
                       @Param( "username" ) String username);
}