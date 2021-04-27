class Api::StepsController < ApplicationController

    def index
        @steps = Project.find(params[:project_id]).steps
        render :index
    end

    def show
        @step = Step.find(params[:id])
    end

    def create
        @step = Step.new(step_params)
        debugger
        if @step.save
            render :show
        else
            render json: @step.errors.full_messages, status: 422
        end
    end
    
    def update
        @step = Step.find_by(id: params[:params])
        if @step.update(step_params)
            render :show
        else
            render json: @step.errors.full_messages, status: 422
        end
    end

    def delete
        @step = Step.find(params[:id])
        @step.destroy
    end

    private

    def step_params
        params.require(:step).permit(:title, :body, :project_id)
    end
end
