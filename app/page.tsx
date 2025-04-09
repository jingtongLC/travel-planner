import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, Users, Clock, Star, ChevronRight, Info, AlertCircle, Gift } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with Background Image */}
      <div className="relative px-4 py-20 text-white md:px-6 lg:px-8">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image src="/images/hero-background.gif" alt="Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30"></div> {/* Overlay to ensure text readability */}
        </div>

        <div className="container relative z-10 mx-auto max-w-5xl">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">东京四天三晚家庭游行程规划</h1>
          <p className="mb-8 max-w-2xl text-lg opacity-90">精心设计的慢行李旅行体验，适合父母与青少年同行</p>

          <div className="grid gap-6 rounded-xl bg-white/10 p-6 backdrop-blur-md md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col">
              <span className="text-sm font-medium opacity-80">旅行时间</span>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="font-medium">4月（樱花季）</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium opacity-80">行程天数</span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="font-medium">4天3晚</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium opacity-80">家庭成员</span>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="font-medium">父母 + 1名3岁儿童</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium opacity-80">出行方式</span>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="font-medium">直飞东京之旅</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-5xl px-4 py-12 md:px-6 lg:px-8">
        {/* Trip Introduction */}
        <div className="mb-12 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold">旅行简介</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              四月是东京的春天的最佳时节，正值樱花盛开，气温宜人，是领略日本文化与现代都市魅力的最佳时机。本行程特别为家庭设计，充分考虑父母与青少年的兴趣爱好，包括动漫文化、科技体验与城市探索。
            </p>
            <p>
              行程涵盖了东京的经典景点和特色体验，探索城堡以及含理想景点，减少不必要的交通往返。让您的家庭之旅更充实轻松，每天的安排考虑了足够的休息时间，避免过度疲劳，同时也保留了自由活动的空间，让旅行更具弹性。
            </p>
          </div>
        </div>

        {/* Hotel Recommendations */}
        <div className="mb-12">
          <div className="mb-6 flex items-center">
            <h2 className="text-2xl font-bold">酒店推荐</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Hotel Card 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/images/hotel1.png" alt="新宿利时达酒店" fill className="object-cover" />
                <Badge className="absolute left-3 top-3 bg-rose-500 text-white hover:bg-rose-600">精品之选</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="mb-1 text-lg font-bold">新宿利时达酒店</h3>
                <div className="mb-3 flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="h-3 w-3" />
                  <span>新宿区西新宿，JR新宿站南口步行7分钟</span>
                </div>
                <div className="mb-3 flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">5.0</span>
                </div>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  该酒店位于东京的交通枢纽新宿，周边有众多餐厅和购物场所，交通非常便利，是家庭旅行的理想选择。
                </p>
                <div className="mb-4 rounded-md bg-purple-50 p-3 dark:bg-purple-900/30">
                  <div className="flex items-start gap-2">
                    <Gift className="mt-0.5 h-4 w-4 text-purple-500 dark:text-purple-400" />
                    <div>
                      <span className="text-xs font-medium text-purple-700 dark:text-purple-300">会员权益：</span>
                      <span className="text-xs text-purple-700 dark:text-purple-300">
                        免费升房，行政走廊，欢迎水果，延迟退房
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green-500" />
                    <span>免费WiFi全覆盖，覆盖率高</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green-500" />
                    <span>房间配有和服体验服务</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green-500" />
                    <span>交通便利，可轻松抵达主要景点</span>
                  </div>
                </div>
                <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700">立即预订</Button>
              </CardContent>
            </Card>

            {/* Hotel Card 2 */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/images/hotel2.png" alt="池袋阳光城王子酒店" fill className="object-cover" />
                <Badge className="absolute left-3 top-3 bg-rose-500 text-white hover:bg-rose-600">最受欢迎</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="mb-1 text-lg font-bold">池袋阳光城王子酒店</h3>
                <div className="mb-3 flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="h-3 w-3" />
                  <span>池袋区西池袋，池袋站西口直连</span>
                </div>
                <div className="mb-3 flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                    <Star className="h-4 w-4 fill-none text-amber-400" />
                  </div>
                  <span className="text-sm font-medium">4.7</span>
                </div>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  池袋地区是东京主要的商业和娱乐区之一，这家酒店直接连接池袋站，交通极为方便，且周边有诸多青少年的动漫和游戏店。
                </p>
                <div className="mb-4 rounded-md bg-purple-50 p-3 dark:bg-purple-900/30">
                  <div className="flex items-start gap-2">
                    <Gift className="mt-0.5 h-4 w-4 text-purple-500 dark:text-purple-400" />
                    <div>
                      <span className="text-xs font-medium text-purple-700 dark:text-purple-300">会员权益：</span>
                      <span className="text-xs text-purple-700 dark:text-purple-300">
                        早餐券，行政酒廊，欢迎饮品，优先入住
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green-500" />
                    <span>高级豪华房间设备，交通极为方便</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green-500" />
                    <span>周边有电玩城和多个漫画店铺</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green-500" />
                    <span>健身房，游泳池设施</span>
                  </div>
                </div>
                <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700">立即预订</Button>
              </CardContent>
            </Card>

            {/* Hotel Card 3 */}
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src="/images/hotel3.png" alt="东新宿E酒店" fill className="object-cover" />
                <Badge className="absolute left-3 top-3 bg-rose-500 text-white hover:bg-rose-600">超高评价</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="mb-1 text-lg font-bold">东新宿E酒店 </h3>
                <div className="mb-3 flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="h-3 w-3" />
                  <span>新宿区西新宿，新宿站南口步行5分钟</span>
                </div>
                <div className="mb-3 flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.9</span>
                </div>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  这家酒店位于新宿高层建筑区，提供更为安静舒适的休息环境，适合希望获得高品质住宿体验的家庭。
                </p>
                <div className="mb-4 rounded-md bg-purple-50 p-3 dark:bg-purple-900/30">
                  <div className="flex items-start gap-2">
                    <Gift className="mt-0.5 h-4 w-4 text-purple-500 dark:text-purple-400" />
                    <div>
                      <span className="text-xs font-medium text-purple-700 dark:text-purple-300">会员权益：</span>
                      <span className="text-xs text-purple-700 dark:text-purple-300">
                        双倍积分，SPA折扣，专属接送，行李免费寄存
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green-500" />
                    <span>房间宽敞，景观视野极佳</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green-500" />
                    <span>酒店内有多家餐厅，品质优越</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-green-500" />
                    <span>距离新宿购物和娱乐区都很近</span>
                  </div>
                </div>
                <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700">立即预订</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Itinerary Tabs */}
        <div>
          <h2 className="mb-6 text-2xl font-bold">行程安排</h2>
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-4">
              <TabsTrigger value="day1">第1天</TabsTrigger>
              <TabsTrigger value="day2">第2天</TabsTrigger>
              <TabsTrigger value="day3">第3天</TabsTrigger>
              <TabsTrigger value="day4">第4天</TabsTrigger>
            </TabsList>

            {/* Day 1 Content */}
            <TabsContent value="day1" className="space-y-8">
              <div className="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                <h3 className="mb-2 text-lg font-medium">新宿，明治神宫与原宿 - 城市与自然的平衡</h3>
              </div>

              {/* Morning Activity */}
              <div className="relative border-l-2 border-rose-500 pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rose-500"></div>
                <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">上午 9:00 - 11:30</div>
                <h4 className="mb-3 text-xl font-bold">新宿御苑赏樱</h4>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  新宿御苑是东京最著名的赏樱胜地之一，园内有超过1000棵樱花树和各种特色品种，是体验日本樱花文化的绝佳去处。园内环境优美，可漫步或在樱花树下野餐，感受春日氛围。
                </p>

                <div className="mb-4 rounded-md bg-rose-50 p-3 text-sm dark:bg-rose-900/30">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 text-rose-500 dark:text-rose-400" />
                    <div>
                      <span className="font-medium text-rose-700 dark:text-rose-300">小贴士：</span>
                      <span className="text-rose-700 dark:text-rose-300">
                        4月初正是樱花盛开的最佳时期，建议上午前往人相对较少，入场需购票（成人500日元，中学生以下免费）。提前准备一些简单食物可在园内野餐。
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 rounded-md bg-green-50 p-3 text-sm dark:bg-green-900/30">
                  <div className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4 text-green-500 dark:text-green-400" />
                    <div>
                      <span className="font-medium text-green-700 dark:text-green-300">青少年亮点：</span>
                      <span className="text-green-700 dark:text-green-300">
                        园内风景优美，适合拍摄社交媒体照片，也是体验日本本地文化的好机会。
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-md bg-sky-50 p-3 text-sm dark:bg-sky-900/30">
                  <MapPin className="h-4 w-4 text-sky-500 dark:text-sky-400" />
                  <span className="text-sky-700 dark:text-sky-300">步行前往新宿站南口，约15分钟</span>
                </div>
              </div>

              {/* Afternoon Activity */}
              <div className="relative border-l-2 border-rose-500 pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rose-500"></div>
                <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">下午 14:00 - 18:30</div>
                <h4 className="mb-3 text-xl font-bold">原宿竹下通与表参道</h4>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  原宿是东京年轻人的时尚中心，竹下通是一条充满特色小店，创意服装店和街头美食的步行街，表参道则是高端品牌云集的购物大道，建筑设计也极富特色。
                </p>

                <div className="mb-4 rounded-md bg-rose-50 p-3 text-sm dark:bg-rose-900/30">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 text-rose-500 dark:text-rose-400" />
                    <div>
                      <span className="font-medium text-rose-700 dark:text-rose-300">小贴士：</span>
                      <span className="text-rose-700 dark:text-rose-300">
                        竹下通周末非常拥挤，注意保管好随身物品。这里有许多零食小店，如可丽饼和彩虹棉花糖，可尝试合计多种甜点。
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 rounded-md bg-green-50 p-3 text-sm dark:bg-green-900/30">
                  <div className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4 text-green-500 dark:text-green-400" />
                    <div>
                      <span className="font-medium text-green-700 dark:text-green-300">青少年亮点：</span>
                      <span className="text-green-700 dark:text-green-300">
                        原宿是动漫和日本流行文化的发源地之一，有许多潮流服饰店和二次元周边店，非常符合青少年的兴趣。
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dinner */}
              <div className="relative border-l-2 border-amber-500 pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-amber-500"></div>
                <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">晚餐推荐</div>
                <p className="rounded-md bg-amber-50 p-4 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                  新宿西口有许多"居酒屋"式餐饮选择，提供新鲜的海鲜料理，和牛定食，炸猪排等，环境舒适，是家庭共享美食的好去处。
                </p>
              </div>

              {/* Evening Activity */}
              <div className="relative border-l-2 border-rose-500 pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rose-500"></div>
                <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">晚上 19:30 - 21:00</div>
                <h4 className="mb-3 text-xl font-bold">新宿都厅展望台夜景</h4>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  东京都厅是东京都的行政中心，其南北两座大楼的45层设有免费展望台，可俯瞰整个东京夜景，天气晴朗时还能远眺富士山。
                </p>

                <div className="mb-4 rounded-md bg-rose-50 p-3 text-sm dark:bg-rose-900/30">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 text-rose-500 dark:text-rose-400" />
                    <div>
                      <span className="font-medium text-rose-700 dark:text-rose-300">小贴士：</span>
                      <span className="text-rose-700 dark:text-rose-300">
                        展望台开放至晚上23:00（周末22:30），最后入场时间提前30分钟，建议傍晚和夜晚都去东京观景。
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h4 className="mb-4 flex items-center gap-2 text-lg font-medium">
                  <MapPin className="h-5 w-5 text-rose-500" />
                  第1天行程地图导航
                </h4>
                <div className="relative h-80 w-full overflow-hidden rounded-xl border">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="第1天行程地图"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                    <Button variant="outline" className="bg-white dark:bg-gray-800">
                      点击查看完整地图
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Day 2 Content */}
            <TabsContent value="day2" className="space-y-8">
              <div className="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                <h3 className="mb-2 text-lg font-medium">浅草寺、东京晴空塔与秋叶原 - 传统与现代的融合</h3>
              </div>

              {/* Morning Activity */}
              <div className="relative border-l-2 border-rose-500 pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rose-500"></div>
                <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">上午 9:00 - 12:00</div>
                <h4 className="mb-3 text-xl font-bold">浅草寺与仲见世商店街</h4>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  浅草寺是东京最古老的寺庙，建于公元628年，是东京最重要的佛教寺院。仲见世商店街是通往寺庙的传统购物街，有各种传统工艺品、小吃和纪念品。
                </p>

                <div className="mb-4 rounded-md bg-rose-50 p-3 text-sm dark:bg-rose-900/30">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 text-rose-500 dark:text-rose-400" />
                    <div>
                      <span className="font-medium text-rose-700 dark:text-rose-300">小贴士：</span>
                      <span className="text-rose-700 dark:text-rose-300">
                        早上前往人流较少，可以更好地欣赏建筑和拍照。不要错过雷门前的巨大红灯笼和五重塔。仲见世商店街有许多传统小吃如人形烧和炸天妇罗。
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 rounded-md bg-green-50 p-3 text-sm dark:bg-green-900/30">
                  <div className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4 text-green-500 dark:text-green-400" />
                    <div>
                      <span className="font-medium text-green-700 dark:text-green-300">青少年亮点：</span>
                      <span className="text-green-700 dark:text-green-300">
                        可以在浅草寺抽签预测运势，还可以在仲见世商店街尝试各种日本传统小吃和购买有趣的纪念品。
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-md bg-sky-50 p-3 text-sm dark:bg-sky-900/30">
                  <MapPin className="h-4 w-4 text-sky-500 dark:text-sky-400" />
                  <span className="text-sky-700 dark:text-sky-300">从浅草站步行前往东京晴空塔，约20分钟</span>
                </div>
              </div>

              {/* Afternoon Activity */}
              <div className="relative border-l-2 border-rose-500 pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rose-500"></div>
                <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">下午 13:30 - 16:00</div>
                <h4 className="mb-3 text-xl font-bold">东京晴空塔与周边购物</h4>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  东京晴空塔是世界上最高的自立式广播电视塔，高634米，设有两个观景台，可以360度俯瞰东京全景。塔下的晴空塔购物中心有各种商店、餐厅和娱乐设施。
                </p>

                <div className="mb-4 rounded-md bg-rose-50 p-3 text-sm dark:bg-rose-900/30">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 text-rose-500 dark:text-rose-400" />
                    <div>
                      <span className="font-medium text-rose-700 dark:text-rose-300">小贴士：</span>
                      <span className="text-rose-700 dark:text-rose-300">
                        建议提前在线购买门票避免排队。天气晴朗时可以看到富士山。购物中心内有许多日本特色商品和美食，可以购买伴手礼。
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 rounded-md bg-green-50 p-3 text-sm dark:bg-green-900/30">
                  <div className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4 text-green-500 dark:text-green-400" />
                    <div>
                      <span className="font-medium text-green-700 dark:text-green-300">青少年亮点：</span>
                      <span className="text-green-700 dark:text-green-300">
                        晴空塔有玻璃地板区域，可以体验"悬空"的刺激感。购物中心内有许多潮流店铺和数码产品店，适合年轻人探索。
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Evening Activity */}
              <div className="relative border-l-2 border-rose-500 pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rose-500"></div>
                <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">晚上 17:30 - 21:00</div>
                <h4 className="mb-3 text-xl font-bold">秋叶原电器街</h4>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  秋叶原是世界闻名的电子产品和动漫中心，这里有各种电子产品商店、动漫周边店、游戏厅和女仆咖啡厅，是了解日本流行文化的最佳地点之一。
                </p>

                <div className="mb-4 rounded-md bg-rose-50 p-3 text-sm dark:bg-rose-900/30">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 text-rose-500 dark:text-rose-400" />
                    <div>
                      <span className="font-medium text-rose-700 dark:text-rose-300">小贴士：</span>
                      <span className="text-rose-700 dark:text-rose-300">
                        晚上的秋叶原霓虹灯闪烁，氛围更佳。大型电器店如友都八喜和LAOX有免税服务。注意部分动漫店的内容可能不适合儿童。
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 rounded-md bg-green-50 p-3 text-sm dark:bg-green-900/30">
                  <div className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4 text-green-500 dark:text-green-400" />
                    <div>
                      <span className="font-medium text-green-700 dark:text-green-300">青少年亮点：</span>
                      <span className="text-green-700 dark:text-green-300">
                        这里是动漫迷和游戏爱好者的天堂，有最新的电子产品和游戏，还可以体验各种街机游戏和扭蛋机。
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dinner */}
              <div className="relative border-l-2 border-amber-500 pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-amber-500"></div>
                <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">晚餐推荐</div>
                <p className="rounded-md bg-amber-50 p-4 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                  秋叶原有许多特色餐厅，如主题咖啡厅和拉面店。推荐尝试"肉の万世"的炸猪排或"一兰拉面"的正宗日式拉面，都是当地人喜爱的美食。
                </p>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h4 className="mb-4 flex items-center gap-2 text-lg font-medium">
                  <MapPin className="h-5 w-5 text-rose-500" />
                  第2天行程地图导航
                </h4>
                <div className="relative h-80 w-full overflow-hidden rounded-xl border">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="第2天行程地图"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                    <Button variant="outline" className="bg-white dark:bg-gray-800">
                      点击查看完整地图
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Day 3 Content */}
            <TabsContent value="day3" className="space-y-8">
              <div className="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                <h3 className="mb-2 text-lg font-medium">台场海滨公园、teamLab无界艺术馆与银座 - 未来与奢华的体验</h3>
              </div>

              {/* Morning Activity */}
              <div className="relative border-l-2 border-rose-500 pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rose-500"></div>
                <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">上午 10:00 - 13:00</div>
                <h4 className="mb-3 text-xl font-bold">台场海滨公园与自由女神像</h4>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  台场是东京湾的一个人工岛，拥有海滨公园、购物中心和各种娱乐设施。这里有东京的自由女神像复制品，可以欣赏到东京湾和彩虹桥的美丽景色。
                </p>

                <div className="mb-4 rounded-md bg-rose-50 p-3 text-sm dark:bg-rose-900/30">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 text-rose-500 dark:text-rose-400" />
                    <div>
                      <span className="font-medium text-rose-700 dark:text-rose-300">小贴士：</span>
                      <span className="text-rose-700 dark:text-rose-300">
                        乘坐百合海鸥线前往台场站最为便捷。海滨公园适合散步和拍照，附近的DiverCity Tokyo
                        Plaza有高达模型展示。
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 rounded-md bg-green-50 p-3 text-sm dark:bg-green-900/30">
                  <div className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4 text-green-500 dark:text-green-400" />
                    <div>
                      <span className="font-medium text-green-700 dark:text-green-300">青少年亮点：</span>
                      <span className="text-green-700 dark:text-green-300">
                        台场有许多高科技体验和互动展览，如丰田展示厅可以体验最新的汽车技术，DiverCity的高达模型是动漫迷必看的景点。
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Afternoon Activity */}
              <div className="relative border-l-2 border-rose-500 pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rose-500"></div>
                <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">下午 14:30 - 17:00</div>
                <h4 className="mb-3 text-xl font-bold">teamLab无界艺术馆</h4>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  teamLab无界艺术馆是一个数字艺术博物馆，展示沉浸式的互动数字艺术装置。这里没有地图，鼓励访客自由探索，每个展厅都有不同的光影和互动体验。
                </p>

                <div className="mb-4 rounded-md bg-rose-50 p-3 text-sm dark:bg-rose-900/30">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 text-rose-500 dark:text-rose-400" />
                    <div>
                      <span className="font-medium text-rose-700 dark:text-rose-300">小贴士：</span>
                      <span className="text-rose-700 dark:text-rose-300">
                        强烈建议提前在线购票，现场常常售罄。穿着浅色衣服可以更好地体验光影效果。整个参观需要约2小时。
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 rounded-md bg-green-50 p-3 text-sm dark:bg-green-900/30">
                  <div className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4 text-green-500 dark:text-green-400" />
                    <div>
                      <span className="font-medium text-green-700 dark:text-green-300">青少年亮点：</span>
                      <span className="text-green-700 dark:text-green-300">
                        这是一个极具未来感的艺术体验，非常适合拍摄社交媒体照片和视频。互动装置让参观者成为艺术的一部分，非常受年轻人欢迎。
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Evening Activity */}
              <div className="relative border-l-2 border-rose-500 pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rose-500"></div>
                <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">晚上 18:00 - 21:00</div>
                <h4 className="mb-3 text-xl font-bold">银座购物与夜景</h4>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  银座是东京最著名的高端购物区，拥有世界顶级品牌专卖店、百货公司和精品店。晚上的银座灯火辉煌，是体验东京夜生活的绝佳地点。
                </p>

                <div className="mb-4 rounded-md bg-rose-50 p-3 text-sm dark:bg-rose-900/30">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 text-rose-500 dark:text-rose-400" />
                    <div>
                      <span className="font-medium text-rose-700 dark:text-rose-300">小贴士：</span>
                      <span className="text-rose-700 dark:text-rose-300">
                        周末下午银座中央大道会变成步行街。银座六丁目的GINZA SIX是最新的购物中心，屋顶花园提供城市景观。
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 rounded-md bg-green-50 p-3 text-sm dark:bg-green-900/30">
                  <div className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4 text-green-500 dark:text-green-400" />
                    <div>
                      <span className="font-medium text-green-700 dark:text-green-300">青少年亮点：</span>
                      <span className="text-green-700 dark:text-green-300">
                        银座有许多潮流店铺和日本设计师品牌，UNIQLO旗舰店和Apple Store都是年轻人喜欢的地方。
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dinner */}
              <div className="relative border-l-2 border-amber-500 pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-amber-500"></div>
                <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">晚餐推荐</div>
                <p className="rounded-md bg-amber-50 p-4 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                  银座有许多高级餐厅，但也有价格适中的美食选择。推荐尝试"银座寿司幸本店"的传统寿司，或"银座天一"的天妇罗，体验正宗的日本料理。
                </p>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h4 className="mb-4 flex items-center gap-2 text-lg font-medium">
                  <MapPin className="h-5 w-5 text-rose-500" />
                  第3天行程地图导航
                </h4>
                <div className="relative h-80 w-full overflow-hidden rounded-xl border">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="第3天行程地图"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                    <Button variant="outline" className="bg-white dark:bg-gray-800">
                      点击查看完整地图
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Day 4 Content */}
            <TabsContent value="day4" className="space-y-8">
              <div className="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                <h3 className="mb-2 text-lg font-medium">上野公园、东京国立博物馆与成田机场 - 文化与返程</h3>
              </div>

              {/* Morning Activity */}
              <div className="relative border-l-2 border-rose-500 pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rose-500"></div>
                <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">上午 9:00 - 11:30</div>
                <h4 className="mb-3 text-xl font-bold">上野公园与动物园</h4>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  上野公园是东京最大的公共公园之一，内有多个博物馆、神社和上野动物园。这里也是赏樱的名胜，春季樱花盛开时非常美丽。
                </p>

                <div className="mb-4 rounded-md bg-rose-50 p-3 text-sm dark:bg-rose-900/30">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 text-rose-500 dark:text-rose-400" />
                    <div>
                      <span className="font-medium text-rose-700 dark:text-rose-300">小贴士：</span>
                      <span className="text-rose-700 dark:text-rose-300">
                        上野动物园是日本最古老的动物园，以大熊猫最为著名。动物园门票成人600日元，中小学生免费。公园内还有不忍池，可以划船。
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 rounded-md bg-green-50 p-3 text-sm dark:bg-green-900/30">
                  <div className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4 text-green-500 dark:text-green-400" />
                    <div>
                      <span className="font-medium text-green-700 dark:text-green-300">青少年亮点：</span>
                      <span className="text-green-700 dark:text-green-300">
                        上野动物园的大熊猫是最受欢迎的明星动物，园内还有北极熊、长颈鹿等多种动物，适合全家游览。
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Afternoon Activity */}
              <div className="relative border-l-2 border-rose-500 pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rose-500"></div>
                <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">下午 12:30 - 14:30</div>
                <h4 className="mb-3 text-xl font-bold">东京国立博物馆</h4>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  东京国立博物馆是日本最大的博物馆，收藏了大量日本艺术品和文物，包括绘画、书法、陶瓷、武士盔甲等，是了解日本历史文化的绝佳场所。
                </p>

                <div className="mb-4 rounded-md bg-rose-50 p-3 text-sm dark:bg-rose-900/30">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 text-rose-500 dark:text-rose-400" />
                    <div>
                      <span className="font-medium text-rose-700 dark:text-rose-300">小贴士：</span>
                      <span className="text-rose-700 dark:text-rose-300">
                        博物馆门票成人1000日元，高中生及以下免费。每周一闭馆（若逢节假日则顺延）。可以租用英文语音导览。
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 rounded-md bg-green-50 p-3 text-sm dark:bg-green-900/30">
                  <div className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4 text-green-500 dark:text-green-400" />
                    <div>
                      <span className="font-medium text-green-700 dark:text-green-300">青少年亮点：</span>
                      <span className="text-green-700 dark:text-green-300">
                        博物馆有武士盔甲和刀剑展示，对喜欢日本历史和武士文化的青少年很有吸引力。还有互动展区可以体验日本传统工艺。
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Evening Activity */}
              <div className="relative border-l-2 border-rose-500 pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-rose-500"></div>
                <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">晚上 16:00 - 19:00</div>
                <h4 className="mb-3 text-xl font-bold">成田机场购物与返程</h4>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  返程前在成田机场购物区选购最后的伴手礼。成田机场有丰富的免税店和日本特产店，可以购买化妆品、零食、电子产品等。
                </p>

                <div className="mb-4 rounded-md bg-rose-50 p-3 text-sm dark:bg-rose-900/30">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 text-rose-500 dark:text-rose-400" />
                    <div>
                      <span className="font-medium text-rose-700 dark:text-rose-300">小贴士：</span>
                      <span className="text-rose-700 dark:text-rose-300">
                        从上野站乘坐京成Skyliner可直达成田机场，约45分钟。机场免税店价格通常比市区便宜，但建议预留至少2小时购物和办理登机手续。
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4 rounded-md bg-green-50 p-3 text-sm dark:bg-green-900/30">
                  <div className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4 text-green-500 dark:text-green-400" />
                    <div>
                      <span className="font-medium text-green-700 dark:text-green-300">青少年亮点：</span>
                      <span className="text-green-700 dark:text-green-300">
                        机场有许多动漫和游戏周边商店，可以购买限定版商品。还有各种日本特色零食和糖果，适合带回与朋友分享。
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h4 className="mb-4 flex items-center gap-2 text-lg font-medium">
                  <MapPin className="h-5 w-5 text-rose-500" />
                  第4天行程地图导航
                </h4>
                <div className="relative h-80 w-full overflow-hidden rounded-xl border">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="第4天行程地图"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                    <Button variant="outline" className="bg-white dark:bg-gray-800">
                      点击查看完整地图
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-gray-50 py-12 dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-bold">关于我们</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                我们是专业的旅行规划平台，致力于为家庭和个人提供高品质的旅行体验和定制化行程服务。
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">热门目的地</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  <Link href="#" className="hover:text-rose-500">
                    东京旅行
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-rose-500">
                    大阪旅行
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-rose-500">
                    京都旅行
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-rose-500">
                    北海道旅行
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">联系我们</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                有任何问题或需要定制行程，请随时联系我们的旅行顾问。
              </p>
              <Button className="mt-4 bg-purple-600 hover:bg-purple-700">联系飞猪</Button>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
            © 2025 飞猪旅行规划平台. 保留所有权利.
          </div>
        </div>
      </footer>
    </div>
  )
}
