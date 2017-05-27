Rails.application.routes.draw do
  resources :articles
  resources :users do
  	collection do
  		post:signIn
  	end
  	 resources :packages
  end
  resources :packages do
  	collection do
  		post:search
  	end
  end
  root 'welcome#index'
end
