class PackagesController < ApplicationController
	def index
	if params[:user_id]
		@user = User.find_by_id(params[:user_id])
		@packages = @user.packages.all
		render json:@packages
	else
		@packages = Package.all
		render json:@packages
	end

	end
	def search
		if @package = Package.find_by_trackId(package_params[:trackId])
		render json: @package
		else
			render json: {status: 400}
		end
	end
	def create
		@user = User.find_by_id(params[:user_id])
		@package = @user.packages.build(package_params)
		if @package.save
		render json:@package
	else 
		render json: {status: 400}
	end
	end

	def update
		@package = Package.find(params[:id])
		if @package.update(package_params)
			render json:@package
		else
			render json: {status: 400}
		end
	end

  private
  def package_params
  	params.require(:package).permit(:sender, :receiver, :detail, :address, :mobile, :city, :region,
  		:weight, :trackId, :status, :price);
  end
end
