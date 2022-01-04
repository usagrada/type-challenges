/*
  189 - Awaited
  -------
  by Maciej Sikora (@maciejsikora) #初級 #promise #built-in
  
  ### 質問
  
  Promise ライクな型が内包する型をどのように取得すればよいでしょうか。
  例えば、`Promise<ExampleType>`という型がある場合、どのようにして ExampleType を取得すればよいでしょうか。
  
  > この問題の元記事は [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4) by [@maciejsikora](https://github.com/maciejsikora) です。
  
  > GitHubで確認する：https://tsch.js.org/189/ja
*/

/* _____________ ここにコードを記入 _____________ */

type MyAwaited<T extends Promise<any>> = T extends Promise<infer P>
  ? P extends Promise<any>
    ? MyAwaited<P>
    : P
  : T;

/* _____________ テストケース _____________ */
import { Equal, Expect } from "@type-challenges/utils";

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>
];

// @ts-expect-error
type error = MyAwaited<number>;

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/189/answer/ja
  > 解答を見る：https://tsch.js.org/189/solutions
  > その他の課題：https://tsch.js.org/ja
*/
