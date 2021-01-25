class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            login!(@user)
            #  
            render '/api/users/show'
        else
            render json: ["Sorry, we can\'t find that account, or your password didn\'t match. Please try again!"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            #  
            logout!
            render '/api/users/show'
        else
            render json: ["can't logout, no current user"], status: 404
        end

    end
end
