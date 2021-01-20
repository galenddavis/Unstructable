class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render '/'
        else
            render json: ["Sorry, we can\'t find that account, or your password didn\'t match. Please try again!"]
    end

    def destroy
        if current_user
            logout!
            render '/'
        else
            render json: ["can't logout, no current user"], status: 404

    end
end
