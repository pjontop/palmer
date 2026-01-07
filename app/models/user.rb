class User < ApplicationRecord
  has_many :sessions, dependent: :destroy
  has_many :magic_links, dependent: :destroy

  normalizes :email_address, with: ->(e) { e.strip.downcase }

  def send_magic_link
end
