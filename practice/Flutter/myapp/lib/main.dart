import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final wordPair = new WordPair.random();
    return new MaterialApp(
      title: 'Flutter开发之旅开始',
      home: new Scaffold(
        appBar: new AppBar(
          title: new RandomWords(),
//          title: new Text(wordPair.asPascalCase),
          // title: new Text('欢迎来到Flutter'),
        ),
        body: new Center(
          child: new Text('Hello Human'),
        ),
      ),
    );
  }
}

class RandomWordsState extends State<RandomWords> {
  @override
  Widget build(BuildContext context) {
    final wordPair = new WordPair.random();
    return new Text(wordPair.asPascalCase);
  }
}

class RandomWords extends StatefulWidget {
  @override
  createState() => new RandomWordsState();
}
