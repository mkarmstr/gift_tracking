Rails.application.routes.draw do
  root 'friends#index'
  
  resources :friends do
    resources :gifts, only: [:create, :edit, :update, :destroy]
  end
end
