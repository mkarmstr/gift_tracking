class ChangeBirthdayTypeInFriends < ActiveRecord::Migration[6.0]
  def up
    # ensure all data is in a correct date format or nullify 
    Friend.find_each do |friend|
      if friend.birthday.present? && friend.birthday.match(/\A\d{4}-\d{2}-\d{2}\z/).nil?
        friend.update(birthday: nil) # or convert to a valid date string if possible.
      end
    end

    # change the column type.
    change_column :friends, :birthday, :date
  end

  def down
    # convert back to string 
    change_column :friends, :birthday, :string
  end
end
