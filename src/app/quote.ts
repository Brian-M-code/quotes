export class Quote {
    showQuotes: boolean;
    likeVotes: number;
    dislikeVotes:number;

    constructor(public author:string, public inspquote: string, public complete:Date)
    {
        this.showQuotes= false;
        this.likeVotes=0;
        this.dislikeVotes=0;
    }


}
