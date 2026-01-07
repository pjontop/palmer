class CreateMagicLinks < ActiveRecord::Migration[8.1]
  def change
    create_table :magic_links do |t|
      t.string :code
      t.datetime :expires_at
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
    add_index :magic_links, :user_id
    add_index :magic_links, :code, unique: true
    add_index :magic_links, :expires_at
  end
end
