class Api::CommentsController < ApplicationController

    def index 
        @comments = Project.find(params[:project_id]).comments
        render :index
    end

    def show
        @comment = Comment.find(params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @step = Step.find_by(id: params[:params])
        if @comment.update(step_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def delete
        @comment = Comment.find(params[:id])
        @comment.destroy
    end

    private
    
    def comment_params 
        params.require(:comment).permit(:body, :project_id, :writer_id)
    end

end
