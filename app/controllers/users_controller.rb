class UsersController < ApplicationController
	def index
		@users = User.all
	end
	def create
		@user = User.new(user_params)
		if @user.save
			render json: @user, status: 200
		else
			render json: {status: 400}

		end
	end
	def signIn
		@user = User.find_for_database_authentication(email: user_params[:email]) 
		if @user  and @user.valid_password?(user_params[:password])
			sign_in :user, @user
			render json:@user
		else render json: {status: 400}
     end 
	end

	private
	def user_params
		params.require(:user).permit(:userName, :email, :password);
	end
end
