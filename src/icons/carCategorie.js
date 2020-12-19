import React from 'react'
import { View, Text } from 'react-native'
import Svg, { Path, G, Circle} from 'react-native-svg'

export default function carCategorie() {
    return (
        <Svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 511.819 511.819"
        width="50"
        height="25"
        stroke='#fff'
        fill='#4898D3'
        fillRule={'nonzero'}>
      <Path
        d="M511.819 272.06v26.48s-8.448 14.88-14.032 17.2h-101.28l-7.44-2.32-3.264 7.44H133.051l-.672-.24-11.408-3.952-85.952 11.152s-2.72-.128-6.624-.64c-10.944-1.424-31.152-5.856-26.368-18.88 0 0-4.56-24.688 0-39.024 0 0 1.392-19.984 18.576-26.96 17.2-6.96 67.84-20.448 95.712-24.608 0 0 24.624-7.44 35.312-17.2 0 0 24.112-18.016 53.888-31.072 16.048-7.024 33.216-11.168 50.656-12.8 33.744-3.168 107.088-8.048 153.776 3.44 39.664 9.776 65.952 32.176 79.792 47.152 7.6 8.224 11.744 18.96 11.744 30.16v10.048l3.248 11.616c.016 0 7.088 5.104 7.088 13.008z"
        fill="#F16E44"
      />
      <Path
        d="M132.587 315.9c0 1.584-.064 3.168-.208 4.72l-11.408-3.952-85.952 11.152s-2.72-.128-6.624-.64a52.402 52.402 0 01-1.216-11.28c0-29.104 23.6-52.704 52.704-52.704s52.704 23.6 52.704 52.704z"
        fill="#2e3235"
      />
      <Circle cx={79.883} cy={315.9} r={43.072} fill="#3e4347" />
      <Path
        d="M388.059 315.708l1.008-2.304 7.44 2.32h96.944c-.096-29.024-23.648-52.528-52.688-52.528-29.056 0-52.608 23.504-52.704 52.512z"
        fill="#2e3235"
      />
      <G fill="#3e4347">
        <Circle cx={440.747} cy={315.9} r={43.072} />
        <Path d="M287.499 166.652c-8.944.304-14.608.608-14.72.624l-.32.016h-.32c-.896-.032-1.792-.032-2.688-.032-39.056 0-77.968 23.2-97.696 37.024-8.912 6.24-15.92 15.024-19.984 24.944l124.464-9.936 11.264-52.64zM403.771 174.444c-12.368-5.408-41.824-8.384-83.072-8.384-4.832 0-9.52.048-13.936.112l-4.48 51.024 123.344-9.84c.4-2.304.736-4.496.976-6.496l.016-.16.032-.16c1.296-7.552-12.752-19.92-22.88-26.096z" />
      </G>
      <G fill="#ffd83b">
        <Path d="M11.019 261.468s17.136-19.952 36.336-18.448c4.672.368 18.64 6.624-3.2 18.448-6.832 3.696-20.272 5.872-30.496 6.032-8.288.112-2.64-6.032-2.64-6.032zM501.499 247.436v-10.048c0-4.336-.8-8.544-2-12.624-6.912-.864-15.568-1.296-18.384 1.52-3.744 3.744-3.744 17.44 0 21.184 3.136 3.136 13.6 2.256 20.72 1.216l-.336-1.248z" />
      </G>
      <Circle cx={79.883} cy={315.9} r={28.752} fill="#cbd6e0" />
      <Circle cx={79.883} cy={315.9} r={23.456} fill="#939799" />
      <G fill="#cbd6e0">
        <Circle cx={79.883} cy={315.9} r={16.88} />
        <Circle cx={440.747} cy={315.9} r={28.752} />
      </G>
      <Circle cx={440.747} cy={315.9} r={23.456} fill="#939799" />
      <Circle cx={440.747} cy={315.9} r={16.88} fill="#cbd6e0" />
      <G fill="#5a5f63">
        <Path d="M180.875 226.892l26.192-2.096 32.944-53.568c-11.456 2.944-22.32 7.28-32.32 12.064l-26.816 43.6zM216.299 224.06l13.664-1.088 34.032-55.344c-4.688.256-9.344.768-13.968 1.584l-33.728 54.848zM309.403 216.636l26.192-2.096 28.912-47.024c-7.296-.544-15.392-.944-24.192-1.168l-30.912 50.288zM344.811 213.804l13.664-1.088 26.416-42.96a208.062 208.062 0 00-12.048-1.536l-28.032 45.584z" />
      </G>
    </Svg>
    )
}
