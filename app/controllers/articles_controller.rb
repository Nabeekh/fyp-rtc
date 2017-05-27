class ArticlesController < ApplicationController
	def index
		@articles = Article.all
	end

	def show
		@article = Article.find(params[:id])
	end
	def new
	end
	def edit
		# @article = Article.find(params[:id])
	end
	def create
		@article = Article.new(articles_params)
		if @article.save
			render json: Article.all, status: 200
		else
			render json: {status: 400}

		end
	end
	def update
		@article = Article.find(params[:id])
		if @article.update(articles_params)
			render json: {status: 200}
		else
			render json: {status: 400}
		end
	end
	def destroy
		@article = Article.find(params[:id])
		@article.destroy
		render json: {status: 200}
	end
	private
	def articles_params
		params.require(:article).permit(:title, :text)
	end
end
