class OutcomesController < ApplicationController
	def index
	if params[:user_id]
		@user = User.find_by_id(params[:user_id])
		@package = User.packages.find_by_id(params[:package_id])
		@outcome = @package.outcome
		render json:@outcome
	else
		@package = Package.find_by_id(params[:package_id])
		@outcome = @package.outcome
		render json: @outcome
	end

	end
	def create
	@package = Package.find_by_id(params[:package_id])
	@outcome = @package.build_outcome(outcomes_params)
	@outcome.save
		if @outcome
		render json: {status: 200}
	else 
		render json: {status: 400}
	end
	end

  private
  def outcomes_params
  	params.require(:outcome).permit(:receiver_cinc, :received_by, :description, :status);
  end
end
