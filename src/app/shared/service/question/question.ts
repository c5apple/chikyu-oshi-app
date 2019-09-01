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

    /** 国名 */
    region: string[];

    /** 国旗URL */
    flagUrl: string[];
}
