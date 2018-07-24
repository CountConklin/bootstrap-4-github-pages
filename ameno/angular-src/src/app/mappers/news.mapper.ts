export interface INewsCards {
  user: string;
  avatarUrl: string;
  content: string;
  image: string;
}

export class NewsMapper {
  public static mapResponse(response: any): Array<INewsCards> {
    return response.map((news) => {
      return {
        user: news.user,
        avatarUrl: news.avatarUrl,
        content: news.content,
        image: news.image
      }
    })
  }
}
