Rails.application.routes.draw do
  resources :articles
  resources :users do
  	collection do
  		post:signIn
  	end
  end

  root 'welcome#index'
end
