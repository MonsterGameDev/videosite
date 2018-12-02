import * as fromRoot from './../../+state/app-state';
import * as videoActions from './video.actions';
import { Video } from '../models/video.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface VideoCoursesState {
    videos: Video[];
    selectedVideo: Video;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    videoCourses: VideoCoursesState;
}

const initialState = {
    videos: [],
    selectedVideo: null,
    error: ''
};

const getVideoCoursesFeatureState = createFeatureSelector<VideoCoursesState>('videoCourses');

export const getVideoCourses = createSelector(
    getVideoCoursesFeatureState,
    state => state.videos
);

export const getSelectedVideoCourse = createSelector(
    getVideoCoursesFeatureState,
    state => state.selectedVideo
);

export const getVideoCoursesError = createSelector(
    getVideoCoursesFeatureState,
    state => state.error
);


export function videoReducer (state = initialState, action: videoActions.VideoActions) {
    switch (action.type) {
        case videoActions.VideoActionTypes.LoadVideoCoursesSuccess:
            return {
                ...state,
                videos: action.payload,
                error: ''
            };
        case videoActions.VideoActionTypes.LoadVideoCoursesFail:
            return {
                ...state,
                videos: [],
                error: action.payload
            };
        case videoActions.VideoActionTypes.CreateVideoCourseSuccess:
            return {
                ...state,
                videos: [...state.videos, action.payload],
                error: ''
            };
        case videoActions.VideoActionTypes.CreateCourseFail:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

