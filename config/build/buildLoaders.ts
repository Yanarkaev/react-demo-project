import webpack from "webpack";
export function buildLoaders(): webpack.RuleSetRule[] {
  const typesctiptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typesctiptLoader];
}
