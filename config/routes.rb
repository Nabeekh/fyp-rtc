Rails.application.routes.draw do
  resources :articles
  resources :users do
  	collection do
  		post:signIn
  	end
  	 resources :packages do
      resources :outcomes
     end
  end
  resources :packages do
    resources :outcomes
  	collection do
  		post:search
  	end
  end
  root 'welcome#index'
end
