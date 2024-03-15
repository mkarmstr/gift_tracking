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

  def update
    @gift = @friend.gifts.find(params[:id])
    if @gift.update(gift_params)
      redirect_to @friend, notice: 'Gift was successfully updated.'
    else
      render 'edit'
    end
  end

  def destroy
    logger.debug "Destroying Gift with ID: #{params[:id]} for Friend with ID: #{params[:friend_id]}"
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