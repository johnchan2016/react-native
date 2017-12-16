
export function MapData(params, joinSymbol){
  return Object.keys(params)
    .map(key => key + '=' + encodeURIComponent(params[key]))
    .join(joinSymbol);
}