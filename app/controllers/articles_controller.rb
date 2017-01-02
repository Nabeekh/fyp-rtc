class ArticlesController < ApplicationController
	def index
		#@article = Article.all
		@article = Article.paginate(:page => params[:page], :per_page => 2)
	end

	def show
		@article = Article.find(params[:id])

	end
	def new
	end
	def edit
		@article = Article.find(params[:id])
	end
	def create
		@article = Article.new(articles_params)
		@article.user_id = current_user.id
		if @article.save
			redirect_to @article
		else
			redirect_to action: 'new', error: @article.errors.full_messages.first
		end
	end
	def update
		@article = Article.find(params[:id])
		if @article.update(articles_params)
			redirect_to @article
		else
			redirect_to action: 'edit', error: @article.errors.full_messages
		end
	end
	def destroy
		@article = Article.find(params[:id])
		@article.destroy
		redirect_to articles_path
	end
	private
	def articles_params
		params.require(:article).permit(:title, :text)
	end
end
