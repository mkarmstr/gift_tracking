class GiftsController < ApplicationController
    before_action :set_friend
  
    def create
      @gift = @friend.gifts.build(gift_params)
      if @gift.save
        redirect_to @friend, notice: 'Gift was successfully added.'
      else
        render 'friends/show'
      end
    end
  
    def destroy
        @gift = @friend.gifts.find(params[:id])
        @gift.destroy
        redirect_to @friend, notice: 'Gift was successfully removed.'
      end
      
  
    private
  
    def set_friend
      @friend = Friend.find(params[:friend_id])
    end
  
    def gift_params
      params.require(:gift).permit(:name, :price, :link)
    end
  end
  