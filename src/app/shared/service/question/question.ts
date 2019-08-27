/**
 * 問題
 */
export class Question {

    /** ID */
    id: number;

    /** CD */
    cd: string;

    /** 解答 */
    answer: string;

    /** 解説 */
    explanation: string;

    /** 動画URL */
    videoUrl: string;

    /** 画像URL */
    imageUrl?: string;
}
