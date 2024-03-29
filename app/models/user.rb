class User < ApplicationRecord

    validates :username, :email, presence: true, uniqueness: true
    validates :occupation, presence: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true}

    has_many :projects,
        foreign_key: :creator_id,
        class_name: 'Project'

    has_many :comments, 
        foreign_key: :writer_id,
        class_name: 'Comment'

    attr_reader :password
    
    after_initialize :ensure_session_token!

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def ensure_session_token!
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        
        self.save 
        
        self.session_token
    end

end
