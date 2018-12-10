import * as fromRoot from './../../+state/app-state';
import * as videoActions from './video.actions';
import { Video } from '../models/video.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface VideoCoursesState {
    videos: Video[];
    currentVideoCourseId: number | null;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    videoCourses: VideoCoursesState;
}

const initialState = {
    videos: [],
    currentVideoCourseId: 0,
    error: ''
};

const getVideoCoursesFeatureState = createFeatureSelector<VideoCoursesState>('videoCourses');

export const getVideoCourses = createSelector(
    getVideoCoursesFeatureState,
    state => state.videos
);

export const getCurrentVideoCourseId = createSelector(
    getVideoCoursesFeatureState,
    state => {
        console.log('state.currentVideoCourseId', state.currentVideoCourseId);
        return state.currentVideoCourseId;
    }
);


export const getCurrentVideoCourse = createSelector(
    getVideoCoursesFeatureState,
    getCurrentVideoCourseId,
    (state, currentVideoCourseId): Video => {
        console.log('currentVideoCourseId', currentVideoCourseId);
        if (currentVideoCourseId === 0) {
            return {
                id: 0,
                author: '',
                datePublished: null,
                duration: 0,
                githubUrl: '',
                level: '',
                longDescription: '',
                posterUrl: '',
                shortDescription: '',
                tags: '',
                title: 'New',
                videoUrl: ''
            };
        } else {
            return currentVideoCourseId ? state.videos.find (vc => vc.id === currentVideoCourseId) : null;
        }
    }
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
        case videoActions.VideoActionTypes.SetCurrentVideoCourseId:
            return {
                ...state,
                currentVideoCourseId: action.payload
            };
        case videoActions.VideoActionTypes.ClearCurrentVideoCourseId:
            return {
                ...state,
                currentVideoCourseId: null
            };
        case videoActions.VideoActionTypes.InitializeCurrentVideoCourseId:
            return  {
                ...state,
                currentVideoCourseId: 0
            };
        case videoActions.VideoActionTypes.DeleteVideoSuccess:
            return {
                ...state,
                people: state.videos.filter((v: Video) => v.id !== action.payload),
                currentVideoCourseId: 0

            };
        case videoActions.VideoActionTypes.DeleteVideoFail:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}

