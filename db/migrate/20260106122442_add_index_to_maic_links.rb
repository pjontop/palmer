class AddIndexToMaicLinks < ActiveRecord::Migration[8.1]
  def change
    add_index :magic_links, :code, unique: true
    add_index :magic_links, :expires_at
  end
end
