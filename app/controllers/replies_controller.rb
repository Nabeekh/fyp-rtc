class RepliesController < ApplicationController
	before_action :get_comment, :only => [:index, :create]
	def index
		@replies = @comment.replies
	end
	def new
		@reply = @comment.replies.new(reply_params)
	end
	def create
		@reply = @comment.replies.new(reply_params)
		@reply.name = current_user.email
		@reply.save
		redirect_to article_path(@comment.article)
	end
	private
	def get_comment
		@comment = Comment.find(params[:comment_id])
	end
	def reply_params
		params.require(:reply).permit(:name, :body)
	end
end
