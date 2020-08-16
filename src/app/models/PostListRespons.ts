import {PostDetails} from './PostDetails';

export interface PostListResponse {
    status: string;
    errorCode: string;
    createdDate:string;
    posts: PostDetails[];
}