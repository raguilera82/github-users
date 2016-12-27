package com.example.raguilera82.portfolio.model;

/**
 * Created by raguilera82 on 27/12/2016.
 */

public class User {

    private String login;
    private String avatarUrl;


    public User(String login, String avatarUrl) {
        this.login = login;
        this.avatarUrl = avatarUrl;
    }

    public String getLogin() {
        return login;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }
}
