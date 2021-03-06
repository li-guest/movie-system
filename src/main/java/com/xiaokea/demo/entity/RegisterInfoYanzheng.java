package com.xiaokea.demo.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
public class RegisterInfoYanzheng {
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword1() {
        return password1;
    }

    public void setPassword1(String password1) {
        this.password1 = password1;
    }

    public void setErrors(HashMap<String, String> errors) {
        this.errors = errors;
    }

    private String username;
    private String password;
    private String password1;
    HashMap<String,String> errors = new HashMap<String , String>();

    public boolean panduan(){
        boolean flag = true;
        if(username == null||username.trim().equals( "" )){
            errors.put("username", "请输用户名" );
            flag =false;
        }

        if(password==null||password.trim().equals( "" )){
            errors.put( "password","请输入密码" );
            flag=false;
        }else if(password.length()>12||password.length()<6){
            errors.put( "password","请输入6-12个字符" );
            flag=false;
        }

        if (!password.equals(password1)){
            errors.put( "password1","两次密码不一致");
            flag=false;
        }

        return flag;
    }
    //向Map集合errors中添加错误信息
//    public void setMessage(String error,String message){
//        if((error!=null)&&(message!=null)){
//            errors.put( error,message );
//        }
//    }
    //获取errors集合
    public Map<String ,String> getErrors(){
        return errors;
    }
}
