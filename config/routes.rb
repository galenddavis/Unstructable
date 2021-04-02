Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show] do 
      resources :projects, only: [:create, :update, :destroy]
      resources :steps, only: [:create, :update, :destroy]
    end
    resources :projects, only: [:index, :show]
    resources :steps, only: [:index, :show]
    resources :tags, only: [:create]
    resource :session, only: [:create, :destroy]
  end

end
