//React comportnentだと明示するためにjsxにする
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";
//jsの中でreturnしてhtmlタグを書いていく手法をjsx手法と呼ぶ
const App = () => {
  console.log("最初");
  //returnが複数業になる場合は()で括ってあげる必要がある
  //波括弧の箇所はjsだと認識する
  //cssに書くこともできるし、タグの中に入れることもできる
  //stateの更新があった場合、Appが再レンダリングされる

  //状態を定義する場合はuserStageを使う
  //1つ目にstateとして使用する変数名、2つ目にstateを変更するための関数
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  //useEffectの第二引数にからの配列を入れると最初の１回だけ処理を実行したい処理を使える
  //第二引数に入れた変数のみ処理を実行したいなどの処理に使う
  //numに変更がなければこのuseEffectはskipされる
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        //すでにtrueの場合setFaceShowFlagを呼ばないようにする
        //左の要素がfalseの場合、右を読み込む
        faceShowFlag || setFaceShowFlag(true);
      } else {
        //左の要素がtrueの場合、右を読み込む
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">"お元気ですか？"</ColorfulMessage>
      <ColorfulMessage color="pink">"元気です！"</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ!</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
  );
};

export default App;
