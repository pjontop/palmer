class applicationController < ActionController::Base
require_unauthenticated_access
rate_limit to: 10, within: 15.minutes, only: :create, with: :rate_limit_exceeded

def show
end

def create
    
