const simpleFeed = require('./simpleFeed');
const sample = {}

describe('testing simpleFeed parsing', () => {
  sample.single = {
    "pagination": {
      "next_min_id": "AQANdyOw7VdinGswyD7sO54qiMspzIiZZscFeojy6_U8SZpNDteSKVCs-Ny7LAmcGcy1lASZdFSBaaOm8JfJVrwXACFIxQCWmZ9p2FRwixKNwg",
      "min_tag_id": "AQANdyOw7VdinGswyD7sO54qiMspzIiZZscFeojy6_U8SZpNDteSKVCs-Ny7LAmcGcy1lASZdFSBaaOm8JfJVrwXACFIxQCWmZ9p2FRwixKNwg",
      "deprecation_warning": "next_max_id and min_id are deprecated for this endpoint; use min_tag_id and max_tag_id instead"
    },
    "data": [{
      "id": "1706675888027782006_558789598",
      "user": {
        "id": "558789598",
        "full_name": "Gaspard",
        "profile_picture": "https://scontent.cdninstagram.com/vp/51d3c0679b8025c17921aaeafb358893/5B882931/t51.2885-19/11348304_1012909125420273_1421427842_a.jpg",
        "username": "ryogasp"
      },
      "images": {
        "thumbnail": {
          "width": 150,
          "height": 150,
          "url": "https://scontent.cdninstagram.com/vp/f49399414015d5a006fa34550431a568/5B819522/t51.2885-15/s150x150/e35/26870558_1423529194435798_8663303804625616896_n.jpg"
        },
        "low_resolution": {
          "width": 320,
          "height": 320,
          "url": "https://scontent.cdninstagram.com/vp/51f0cb1f893b44e4ccc92e873b2983df/5B8F4212/t51.2885-15/s320x320/e35/26870558_1423529194435798_8663303804625616896_n.jpg"
        },
        "standard_resolution": {
          "width": 640,
          "height": 640,
          "url": "https://scontent.cdninstagram.com/vp/c1885ac1f28bfaf7c36dba5b29b190c3/5B92955F/t51.2885-15/s640x640/sh0.08/e35/26870558_1423529194435798_8663303804625616896_n.jpg"
        }
      },
      "created_time": "1517671641",
      "caption": {
        "id": "17909652250129303",
        "text": "Crossing the Sengalor river, on my way to the temple... Oh wait, it's blurry, it was only a dream #loading",
        "created_time": "1517671641",
        "from": {
          "id": "558789598",
          "full_name": "Gaspard",
          "profile_picture": "https://scontent.cdninstagram.com/vp/51d3c0679b8025c17921aaeafb358893/5B882931/t51.2885-19/11348304_1012909125420273_1421427842_a.jpg",
          "username": "ryogasp"
        }
      },
      "user_has_liked": false,
      "likes": {
        "count": 9
      },
      "tags": ["loading"],
      "filter": "Normal",
      "comments": {
        "count": 2
      },
      "type": "image",
      "link": "https://www.instagram.com/p/BevVK2Enst2/",
      "location": {
        "latitude": 3.34169,
        "longitude": 101.246,
        "name": "Kuala Selangor",
        "id": 214963614
      },
      "attribution": null,
      "users_in_photo": []
    }],
    "meta": {
      "code": 200
    }
  };

  it('parses a json with a single media', () => {
    const single = simpleFeed(sample.single);
    expect(single[0].user).toBe('ryogasp');
    expect(single[0].name).toBe('Gaspard');
    expect(single[0].image.width).toBe(640);
  });
});
