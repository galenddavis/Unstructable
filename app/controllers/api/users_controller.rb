class Api::UsersController < ApplicationController

    def create
        # #debugger
        @user = User.new(user_params)
        # #debugger
        if @user.save
            login!(@user)
            render '/api/users/show' 
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :occupation, :email, :location, :user_bio, :website)
    end
end


