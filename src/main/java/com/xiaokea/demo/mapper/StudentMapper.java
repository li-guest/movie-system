package com.xiaokea.demo.mapper;

import com.xiaokea.demo.entity.Studentinfo;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
@Mapper
//映射类
public interface StudentMapper {

    @Select( "select * from studentinfo where username = #{username}" )
    public List<Studentinfo> findByUsername(String username);

    @Select("select * from studentinfo")
    List<Studentinfo> findAll();

    @Select( "select username,password from studentinfo where username=#{username} and password=#{password}" )
    public Studentinfo findByUsernameAndPassword(@Param ( "username" ) String username , @Param( "password" ) String password);

    @Select( "select username from studentinfo where username=#{username}" )
    public String selectUsername(@Param ( "username" ) String username );


    @Insert( "insert into studentinfo(username,password,sex,birthday,myself,QQ) values(#{username},#{password},#{sex},#{birthday},#{myself},#{QQ})" )
    public void save( @Param ( "username" ) String username , @Param( "password" ) String password , @Param( "sex" ) String sex, @Param("birthday") String birthday , @Param( "myself" ) String myself, @Param( "QQ" ) String QQ);

    //多字段更新，只需要在单字段后面用逗号分隔来书写就行
    @Update( "update studentinfo set sex = #{sex},QQ=#{QQ},birthday=#{birthday},myself=#{myself}  where username=#{username}" )
    public void update(@Param( "sex" ) String sex,
                       @Param( "QQ" ) String QQ,
                       @Param( "birthday" ) String birthday,
                       @Param( "myself" ) String myself,
                       @Param( "username" ) String username);
}
