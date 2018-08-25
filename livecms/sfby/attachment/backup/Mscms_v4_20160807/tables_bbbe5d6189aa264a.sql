#
# TABLE STRUCTURE FOR: ms_admin
#

DROP TABLE IF EXISTS ms_admin;

CREATE TABLE `ms_admin` (
  `id` smallint(5) NOT NULL AUTO_INCREMENT,
  `adminname` varchar(64) DEFAULT '' COMMENT '�˺�',
  `adminpass` varchar(64) DEFAULT '' COMMENT '����',
  `admincode` varchar(6) DEFAULT '' COMMENT '��Կ',
  `logip` varchar(128) DEFAULT '' COMMENT '����¼IP',
  `lognums` int(10) DEFAULT '0' COMMENT '��¼����',
  `logtime` int(10) DEFAULT '0' COMMENT '����¼ʱ��',
  `card` varchar(255) DEFAULT '' COMMENT '���',
  `sid` smallint(3) unsigned DEFAULT '0' COMMENT '��ɫid',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=gbk COMMENT='����Ա��';

#
# TABLE STRUCTURE FOR: ms_admin_log
#

DROP TABLE IF EXISTS ms_admin_log;

CREATE TABLE `ms_admin_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` smallint(5) unsigned DEFAULT '0' COMMENT '�û�ID',
  `loginip` varchar(50) DEFAULT '' COMMENT '��¼IP',
  `logintime` int(10) unsigned DEFAULT '0' COMMENT '��¼ʱ��',
  `useragent` varchar(255) DEFAULT '' COMMENT '�ͻ�����Ϣ',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=151 DEFAULT CHARSET=gbk COMMENT='����Ա��¼��';

#
# TABLE STRUCTURE FOR: ms_adminzu
#

DROP TABLE IF EXISTS ms_adminzu;

CREATE TABLE `ms_adminzu` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT '' COMMENT '��ɫ����',
  `sys` text COMMENT 'Ĭ��Ȩ��',
  `app` text COMMENT '���Ȩ��',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=gbk COMMENT='����Ա��ɫ��';

#
# TABLE STRUCTURE FOR: ms_ads
#

DROP TABLE IF EXISTS ms_ads;

CREATE TABLE `ms_ads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT '' COMMENT '��ǩ��ʾ',
  `js` varchar(100) DEFAULT '' COMMENT 'JS·��',
  `html` text COMMENT '��ǩ����',
  `neir` varchar(200) DEFAULT '' COMMENT '��ǩ����',
  `addtime` int(11) DEFAULT '0' COMMENT '����ʱ��',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=gbk COMMENT='�Զ���JS��';

#
# TABLE STRUCTURE FOR: ms_blog
#

DROP TABLE IF EXISTS ms_blog;

CREATE TABLE `ms_blog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `hits` int(10) unsigned DEFAULT '0' COMMENT '�������',
  `phits` int(10) unsigned DEFAULT '0' COMMENT '���۴���',
  `neir` text COMMENT '˵˵����',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT '����ʱ��',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `pjits` (`phits`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=gbk COMMENT='��Ա˵˵��';

#
# TABLE STRUCTURE FOR: ms_caiji
#

DROP TABLE IF EXISTS ms_caiji;

CREATE TABLE `ms_caiji` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT '',
  `url` varchar(250) DEFAULT '',
  `code` varchar(10) DEFAULT '',
  `dir` varchar(64) DEFAULT '',
  `zid` tinyint(1) DEFAULT '0',
  `fid` smallint(5) DEFAULT '0',
  `cfid` tinyint(1) DEFAULT '0',
  `picid` tinyint(1) DEFAULT '0',
  `dxid` tinyint(1) DEFAULT '0',
  `rkid` tinyint(1) DEFAULT '0',
  `htmlid` tinyint(1) DEFAULT '0',
  `cjurl` text,
  `ksid` int(10) DEFAULT '0',
  `jsid` int(10) DEFAULT '0',
  `listks` text,
  `listjs` text,
  `picmode` tinyint(1) DEFAULT '0',
  `picks` text,
  `picjs` text,
  `linkks` text,
  `linkjs` text,
  `nameks` text,
  `namejs` text,
  `strth` text,
  `addtime` int(10) unsigned DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=gbk COMMENT='�ɼ������';

#
# TABLE STRUCTURE FOR: ms_cjannex
#

DROP TABLE IF EXISTS ms_cjannex;

CREATE TABLE `ms_cjannex` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT '',
  `cid` int(10) unsigned DEFAULT '0',
  `fid` tinyint(1) DEFAULT '0',
  `htmlid` tinyint(1) DEFAULT '0',
  `zd` varchar(128) DEFAULT '',
  `ks` text,
  `js` text,
  `fname` varchar(64) DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`),
  KEY `fid` (`fid`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=gbk COMMENT='�ɼ����������';

#
# TABLE STRUCTURE FOR: ms_cjdata
#

DROP TABLE IF EXISTS ms_cjdata;

CREATE TABLE `ms_cjdata` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `dir` varchar(64) DEFAULT '',
  `name` varchar(255) DEFAULT '',
  `pic` varchar(255) DEFAULT '',
  `zid` tinyint(1) DEFAULT '0',
  `cfid` tinyint(1) DEFAULT '0',
  `zdy` text,
  `addtime` int(10) unsigned DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `zid` (`zid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=gbk COMMENT='�ɼ����ݱ�';

#
# TABLE STRUCTURE FOR: ms_cjlist
#

DROP TABLE IF EXISTS ms_cjlist;

CREATE TABLE `ms_cjlist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT '',
  `dir` varchar(64) DEFAULT '',
  `url` varchar(255) DEFAULT '',
  `names` varchar(255) DEFAULT '',
  `zid` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `zid` (`zid`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=gbk COMMENT='�ɼ�վ���';

#
# TABLE STRUCTURE FOR: ms_daili_jilu
#

DROP TABLE IF EXISTS ms_daili_jilu;

CREATE TABLE `ms_daili_jilu` (
  `id` mediumint(5) unsigned NOT NULL AUTO_INCREMENT,
  `uid` mediumint(5) DEFAULT '0' COMMENT '��ԱID',
  `dlid` mediumint(5) DEFAULT '0' COMMENT '����ID',
  `cion` mediumint(5) DEFAULT '0' COMMENT '��ֵ���',
  `tcion` mediumint(5) DEFAULT '0' COMMENT '���ֽ��',
  `dltime` int(10) unsigned DEFAULT '0' COMMENT '��ֵʱ��',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `dlid` (`dlid`),
  KEY `cion` (`cion`),
  KEY `tcion` (`tcion`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=gbk COMMENT='��ֵ��¼1';

#
# TABLE STRUCTURE FOR: ms_daili_tixian
#

DROP TABLE IF EXISTS ms_daili_tixian;

CREATE TABLE `ms_daili_tixian` (
  `id` mediumint(5) unsigned NOT NULL AUTO_INCREMENT,
  `cid` mediumint(5) DEFAULT '0' COMMENT '����ID',
  `uid` mediumint(5) DEFAULT '0' COMMENT '����ID',
  `tcion` mediumint(5) DEFAULT '0' COMMENT '���ֽ��',
  `zid` mediumint(5) DEFAULT '0' COMMENT '״̬',
  `text` text COMMENT '��ϸ����',
  `dltime` int(10) unsigned DEFAULT '0' COMMENT '����ʱ��',
  `tell` text COMMENT '��ϸ����',
  `name` text COMMENT '��ϸ����',
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`),
  KEY `dlid` (`uid`),
  KEY `zid` (`zid`),
  KEY `tcion` (`tcion`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=gbk COMMENT='���ּ�¼';

#
# TABLE STRUCTURE FOR: ms_daili_type
#

DROP TABLE IF EXISTS ms_daili_type;

CREATE TABLE `ms_daili_type` (
  `id` mediumint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT '' COMMENT '����',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=gbk COMMENT='���ַ���';

#
# TABLE STRUCTURE FOR: ms_dt
#

DROP TABLE IF EXISTS ms_dt;

CREATE TABLE `ms_dt` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `dir` varchar(64) DEFAULT '' COMMENT '����ʾ',
  `yid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ���ʾ',
  `title` varchar(255) DEFAULT '' COMMENT '���ͱ���',
  `did` int(10) unsigned DEFAULT '0' COMMENT '����ID',
  `name` varchar(255) DEFAULT '' COMMENT '���ݱ���',
  `link` varchar(255) DEFAULT '' COMMENT '��������',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT '����ʱ��',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `yid` (`yid`),
  KEY `did` (`did`),
  KEY `dt_dir_id` (`dir`,`id`)
) ENGINE=MyISAM AUTO_INCREMENT=62 DEFAULT CHARSET=gbk COMMENT='��Ա��̬��';

#
# TABLE STRUCTURE FOR: ms_fans
#

DROP TABLE IF EXISTS ms_fans;

CREATE TABLE `ms_fans` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uida` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `uidb` int(10) unsigned DEFAULT '0' COMMENT '��˿ID',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`id`),
  KEY `fans_uida_id` (`uida`,`id`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk COMMENT='��˿��';

#
# TABLE STRUCTURE FOR: ms_friend
#

DROP TABLE IF EXISTS ms_friend;

CREATE TABLE `ms_friend` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uida` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `uidb` int(10) unsigned DEFAULT '0' COMMENT '����ID',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`id`),
  KEY `friend_uida_id` (`uida`,`id`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk COMMENT='���ѱ�';

#
# TABLE STRUCTURE FOR: ms_funco
#

DROP TABLE IF EXISTS ms_funco;

CREATE TABLE `ms_funco` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uida` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `uidb` int(10) unsigned DEFAULT '0' COMMENT '������ID',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`id`),
  KEY `funco_uida_id` (`uida`,`id`),
  KEY `funco_uidb_id` (`uidb`,`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=gbk COMMENT='�ÿͱ�';

#
# TABLE STRUCTURE FOR: ms_gbook
#

DROP TABLE IF EXISTS ms_gbook;

CREATE TABLE `ms_gbook` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cid` tinyint(1) DEFAULT '0' COMMENT '����ID',
  `fid` int(10) unsigned DEFAULT '0' COMMENT '�ϼ�ID',
  `uida` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `uidb` int(10) unsigned DEFAULT '0' COMMENT '������ID',
  `neir` text COMMENT '����',
  `ip` varchar(20) DEFAULT '' COMMENT 'IP',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`id`),
  KEY `fid` (`fid`),
  KEY `cid` (`cid`),
  KEY `gbook_uida_id` (`uida`,`id`),
  KEY `gbook_uidb_id` (`uidb`,`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=gbk COMMENT='���Ա�';

#
# TABLE STRUCTURE FOR: ms_income
#

DROP TABLE IF EXISTS ms_income;

CREATE TABLE `ms_income` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `dir` varchar(64) DEFAULT '' COMMENT '�������',
  `title` varchar(255) DEFAULT '' COMMENT '��������',
  `sid` tinyint(1) DEFAULT '0' COMMENT '����ID',
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `nums` int(10) unsigned DEFAULT '0' COMMENT '����',
  `ip` varchar(15) DEFAULT '' COMMENT 'IP',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`id`),
  KEY `sid` (`sid`),
  KEY `uid` (`uid`),
  KEY `dir` (`dir`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=gbk COMMENT='�����¼��';

#
# TABLE STRUCTURE FOR: ms_iplist
#

DROP TABLE IF EXISTS ms_iplist;

CREATE TABLE `ms_iplist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(64) DEFAULT '' COMMENT '�ο�IP',
  `uid` int(11) DEFAULT '0' COMMENT '��ԱID',
  `bankuai` varchar(64) DEFAULT '' COMMENT '���',
  `nid` int(11) DEFAULT '0' COMMENT '����ID',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk COMMENT='�ο͹ۿ���¼';

#
# TABLE STRUCTURE FOR: ms_label
#

DROP TABLE IF EXISTS ms_label;

CREATE TABLE `ms_label` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT '' COMMENT 'Ψһ��ʾ',
  `selflable` text COMMENT '��ǩ����',
  `neir` varchar(128) DEFAULT '' COMMENT '��ǩ����',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=gbk COMMENT='��̬��ǩ��';

#
# TABLE STRUCTURE FOR: ms_link
#

DROP TABLE IF EXISTS ms_link;

CREATE TABLE `ms_link` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT '' COMMENT '����',
  `url` varchar(255) DEFAULT '' COMMENT '��ַ',
  `pic` varchar(255) DEFAULT '' COMMENT 'LOGO',
  `cid` tinyint(1) DEFAULT '1' COMMENT '����',
  `sid` tinyint(1) DEFAULT '1' COMMENT '��ҳ�Ƿ���ʾ',
  `xid` smallint(5) DEFAULT '0' COMMENT '�����',
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`),
  KEY `sid` (`sid`),
  KEY `xid` (`xid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=gbk COMMENT='�������ӱ�';

#
# TABLE STRUCTURE FOR: ms_msg
#

DROP TABLE IF EXISTS ms_msg;

CREATE TABLE `ms_msg` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `did` tinyint(1) DEFAULT '0' COMMENT '�Ƿ��Ѷ�',
  `name` varchar(255) DEFAULT '' COMMENT '����',
  `neir` text COMMENT '����',
  `uida` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `uidb` int(10) unsigned DEFAULT '0' COMMENT '������ID',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`id`),
  KEY `did` (`did`),
  KEY `msg_uida_id` (`uida`)
) ENGINE=MyISAM AUTO_INCREMENT=100 DEFAULT CHARSET=gbk COMMENT='��Ա��Ϣ��';

#
# TABLE STRUCTURE FOR: ms_news
#

DROP TABLE IF EXISTS ms_news;

CREATE TABLE `ms_news` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT '' COMMENT '����',
  `bname` varchar(64) DEFAULT '' COMMENT 'Ӣ�ı���',
  `color` varchar(10) DEFAULT '' COMMENT '������ɫ',
  `tags` varchar(255) DEFAULT '' COMMENT 'TAGS��ǩ',
  `pic` varchar(255) DEFAULT '' COMMENT 'ή��ͼ',
  `pic2` varchar(255) DEFAULT '' COMMENT '�õ�ͼƬ',
  `cid` mediumint(5) DEFAULT '0' COMMENT '����ID',
  `tid` mediumint(5) DEFAULT '0' COMMENT 'ר��ID',
  `reco` tinyint(1) DEFAULT '0' COMMENT '�Ƽ��Ǽ�',
  `yid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ�����',
  `hid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ����վ',
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `hits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `yhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `zhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `rhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `dhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `chits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `cion` mediumint(5) DEFAULT '0' COMMENT '�Ķ���Ҫ���',
  `vip` mediumint(5) DEFAULT '0' COMMENT '�ɹۿ���',
  `level` mediumint(5) DEFAULT '0' COMMENT '�ɹۿ��ȼ�',
  `info` varchar(128) DEFAULT '' COMMENT '����',
  `content` text COMMENT '��������',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT '����ʱ��',
  `skins` varchar(64) DEFAULT 'show.html' COMMENT 'Ĭ��ģ��',
  `title` varchar(64) DEFAULT '' COMMENT 'SEO����',
  `keywords` varchar(150) DEFAULT '' COMMENT 'SEO�ؼ���',
  `description` varchar(200) DEFAULT '' COMMENT 'SEO����',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `cid` (`cid`),
  KEY `tid` (`tid`),
  KEY `hid` (`hid`),
  KEY `yid` (`yid`),
  KEY `reco` (`reco`),
  KEY `hits` (`hits`),
  KEY `yhits` (`yhits`),
  KEY `zhits` (`zhits`),
  KEY `rhits` (`rhits`),
  KEY `news_hid_addtime` (`hid`,`addtime`),
  KEY `news_cid_yid_hid_id` (`yid`,`hid`,`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=gbk COMMENT='���ű�';

#
# TABLE STRUCTURE FOR: ms_news_list
#

DROP TABLE IF EXISTS ms_news_list;

CREATE TABLE `ms_news_list` (
  `id` mediumint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT '' COMMENT '����',
  `bname` varchar(30) DEFAULT '' COMMENT 'Ӣ�ı���',
  `fid` tinyint(1) DEFAULT '0' COMMENT '�ϼ�ID',
  `xid` tinyint(1) DEFAULT '0' COMMENT '����ID',
  `yid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ���ʾ',
  `skins` varchar(64) DEFAULT 'list.html' COMMENT 'Ĭ��ģ��',
  `title` varchar(64) DEFAULT '' COMMENT 'SEO����',
  `keywords` varchar(150) DEFAULT '' COMMENT 'SEO�ؼ���',
  `description` varchar(200) DEFAULT '' COMMENT 'SEO����',
  PRIMARY KEY (`id`),
  KEY `xid` (`xid`),
  KEY `yid` (`yid`),
  KEY `fid` (`fid`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=gbk COMMENT='���ŷ����';

#
# TABLE STRUCTURE FOR: ms_news_look
#

DROP TABLE IF EXISTS ms_news_look;

CREATE TABLE `ms_news_look` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT '' COMMENT '��������',
  `cid` mediumint(5) unsigned DEFAULT '0' COMMENT '���ŷ���ID',
  `did` varchar(128) DEFAULT '' COMMENT '����ID',
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `cion` int(10) DEFAULT '0' COMMENT '�۳����',
  `ip` varchar(20) DEFAULT '' COMMENT '��ԱIP',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `cid` (`cid`),
  KEY `did` (`did`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk COMMENT='�����շ��Ķ���¼';

#
# TABLE STRUCTURE FOR: ms_news_topic
#

DROP TABLE IF EXISTS ms_news_topic;

CREATE TABLE `ms_news_topic` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT '' COMMENT '����',
  `bname` varchar(20) DEFAULT '' COMMENT '����',
  `pic` varchar(255) DEFAULT '' COMMENT 'ͼƬ',
  `toppic` varchar(255) DEFAULT '' COMMENT '����ͼƬ',
  `tid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ��Ƽ�',
  `yid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ����',
  `hits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `yhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `zhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `rhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `neir` text COMMENT '����',
  `skins` varchar(64) DEFAULT 'topic.html' COMMENT 'Ĭ��ģ��',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  `title` varchar(64) DEFAULT '' COMMENT 'SEO����',
  `keywords` varchar(150) DEFAULT '' COMMENT 'SEO�ؼ���',
  `description` varchar(200) DEFAULT '' COMMENT 'SEO����',
  PRIMARY KEY (`id`),
  KEY `tid` (`tid`),
  KEY `yid` (`yid`),
  KEY `hits` (`hits`),
  KEY `yhits` (`yhits`),
  KEY `zhits` (`zhits`),
  KEY `rhits` (`rhits`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk COMMENT='����ר���';

#
# TABLE STRUCTURE FOR: ms_page
#

DROP TABLE IF EXISTS ms_page;

CREATE TABLE `ms_page` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `sid` tinyint(1) DEFAULT '0' COMMENT '���з�ʽ',
  `name` varchar(64) DEFAULT '' COMMENT 'Ψһ��ʾ',
  `neir` varchar(128) DEFAULT '' COMMENT 'ҳ�����',
  `url` varchar(100) DEFAULT '' COMMENT 'ҳ��·��',
  `html` text COMMENT 'ҳ�汻��',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`id`),
  KEY `sid` (`sid`),
  KEY `name` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=gbk COMMENT='�Զ���ҳ���';

#
# TABLE STRUCTURE FOR: ms_pay
#

DROP TABLE IF EXISTS ms_pay;

CREATE TABLE `ms_pay` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `dingdan` varchar(64) DEFAULT '' COMMENT '����',
  `type` varchar(30) DEFAULT '' COMMENT '֧����ʽ',
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `rmb` decimal(10,2) DEFAULT '0.00' COMMENT '���',
  `pid` tinyint(1) DEFAULT '0' COMMENT '״̬',
  `ip` varchar(15) DEFAULT '' COMMENT 'IP',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `pid` (`pid`),
  KEY `dingdan` (`dingdan`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=gbk COMMENT='֧����¼��';

#
# TABLE STRUCTURE FOR: ms_paycard
#

DROP TABLE IF EXISTS ms_paycard;

CREATE TABLE `ms_paycard` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `card` varchar(20) DEFAULT '' COMMENT '����',
  `pass` varchar(10) DEFAULT '' COMMENT '����',
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `rmb` decimal(10,2) DEFAULT '0.00' COMMENT '���',
  `usertime` int(10) unsigned DEFAULT '0' COMMENT 'ʹ��ʱ��',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT '����ʱ��',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=gbk COMMENT='��ֵ����';

#
# TABLE STRUCTURE FOR: ms_pic
#

DROP TABLE IF EXISTS ms_pic;

CREATE TABLE `ms_pic` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT '' COMMENT 'ͼƬ��ַ',
  `cid` mediumint(5) DEFAULT '0' COMMENT '����ID',
  `sid` int(10) unsigned DEFAULT '0' COMMENT '���ID',
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `yid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ�����',
  `hid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ����վ',
  `content` text COMMENT 'ͼƬ����',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT '����ʱ��',
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`),
  KEY `sid` (`sid`),
  KEY `uid` (`uid`),
  KEY `yid` (`yid`),
  KEY `hid` (`hid`),
  KEY `pic_hid_addtime` (`hid`,`addtime`)
) ENGINE=MyISAM AUTO_INCREMENT=42 DEFAULT CHARSET=gbk COMMENT='ͼƬ��';

#
# TABLE STRUCTURE FOR: ms_pic_list
#

DROP TABLE IF EXISTS ms_pic_list;

CREATE TABLE `ms_pic_list` (
  `id` mediumint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT '' COMMENT '����',
  `bname` varchar(30) DEFAULT '' COMMENT 'Ӣ�ı���',
  `fid` tinyint(1) DEFAULT '0' COMMENT '�ϼ�ID',
  `xid` tinyint(1) DEFAULT '0' COMMENT '����ID',
  `yid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ���ʾ',
  `skins` varchar(64) DEFAULT 'list.html' COMMENT 'Ĭ��ģ��',
  `title` varchar(64) DEFAULT '' COMMENT 'SEO����',
  `keywords` varchar(150) DEFAULT '' COMMENT 'SEO�ؼ���',
  `description` varchar(200) DEFAULT '' COMMENT 'SEO����',
  PRIMARY KEY (`id`),
  KEY `xid` (`xid`),
  KEY `yid` (`yid`),
  KEY `fid` (`fid`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=gbk COMMENT='ͼƬ�����';

#
# TABLE STRUCTURE FOR: ms_pic_type
#

DROP TABLE IF EXISTS ms_pic_type;

CREATE TABLE `ms_pic_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT '' COMMENT '����',
  `bname` varchar(64) DEFAULT '' COMMENT 'Ӣ�ı���',
  `tags` varchar(255) DEFAULT '' COMMENT 'TAGS��ǩ',
  `pic` varchar(255) DEFAULT '' COMMENT '������',
  `cid` mediumint(5) DEFAULT '0' COMMENT '����ID',
  `reco` tinyint(1) DEFAULT '0' COMMENT '�Ƽ��Ǽ�',
  `yid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ�����',
  `hid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ����վ',
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `singerid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `hits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `yhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `zhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `rhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `dhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `chits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT '����ʱ��',
  `skins` varchar(64) DEFAULT 'show.html' COMMENT 'Ĭ��ģ��',
  `title` varchar(64) DEFAULT '' COMMENT 'SEO����',
  `keywords` varchar(150) DEFAULT '' COMMENT 'SEO�ؼ���',
  `description` varchar(200) DEFAULT '' COMMENT 'SEO����',
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`),
  KEY `singerid` (`singerid`),
  KEY `reco` (`reco`),
  KEY `uid` (`uid`),
  KEY `yid` (`yid`),
  KEY `hid` (`hid`),
  KEY `hits` (`hits`),
  KEY `yhits` (`yhits`),
  KEY `zhits` (`zhits`),
  KEY `rhits` (`rhits`),
  KEY `pict_hid_addtime` (`hid`,`addtime`),
  KEY `pict_cid_yid_hid_id` (`yid`,`hid`,`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=gbk COMMENT='ͼƬ����';

#
# TABLE STRUCTURE FOR: ms_pl
#

DROP TABLE IF EXISTS ms_pl;

CREATE TABLE `ms_pl` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(64) DEFAULT '' COMMENT '��Ա����',
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `content` text COMMENT '��������',
  `ip` varchar(18) DEFAULT '' COMMENT '����IP',
  `did` int(10) unsigned DEFAULT '0' COMMENT '����ID',
  `dir` varchar(64) DEFAULT '' COMMENT '�������',
  `cid` tinyint(2) DEFAULT '0' COMMENT '����֧ID',
  `fid` int(10) unsigned DEFAULT '0' COMMENT '�ϼ�ID',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`),
  KEY `uid` (`uid`),
  KEY `did` (`did`),
  KEY `fid` (`fid`),
  KEY `pl_dir_did_id` (`dir`,`did`,`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=gbk COMMENT='���۱�';

#
# TABLE STRUCTURE FOR: ms_plugins
#

DROP TABLE IF EXISTS ms_plugins;

CREATE TABLE `ms_plugins` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT '' COMMENT '�������',
  `author` varchar(20) DEFAULT '' COMMENT '����',
  `dir` varchar(30) DEFAULT '' COMMENT 'Ŀ¼',
  `version` varchar(10) DEFAULT '' COMMENT '�汾��',
  `description` varchar(200) DEFAULT '' COMMENT '����',
  `sid` tinyint(1) DEFAULT '0' COMMENT '����',
  `ak` text COMMENT 'ak',
  PRIMARY KEY (`id`),
  KEY `dir` (`dir`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=gbk COMMENT='����';

#
# TABLE STRUCTURE FOR: ms_session
#

DROP TABLE IF EXISTS ms_session;

CREATE TABLE `ms_session` (
  `sessionid` varchar(40) NOT NULL DEFAULT '0',
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `plub` varchar(18) DEFAULT '' COMMENT '����ID',
  `data` text COMMENT 'session����',
  `ip` varchar(15) DEFAULT '' COMMENT 'IP',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`sessionid`),
  KEY `uid` (`uid`),
  KEY `addtime` (`addtime`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk COMMENT='session���ݱ�';

#
# TABLE STRUCTURE FOR: ms_share
#

DROP TABLE IF EXISTS ms_share;

CREATE TABLE `ms_share` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ip` varchar(20) DEFAULT '' COMMENT '����IP',
  `agent` varchar(255) DEFAULT '' COMMENT '���ʿͻ���',
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `cion` int(10) unsigned DEFAULT '0' COMMENT '���ͽ��',
  `jinyan` int(10) unsigned DEFAULT '0' COMMENT '���;���',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT '����ʱ��',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=gbk COMMENT='������¼��';

#
# TABLE STRUCTURE FOR: ms_spend
#

DROP TABLE IF EXISTS ms_spend;

CREATE TABLE `ms_spend` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `dir` varchar(64) DEFAULT '' COMMENT '�������',
  `title` varchar(255) DEFAULT '' COMMENT '��������',
  `sid` tinyint(1) DEFAULT '0' COMMENT '����ID',
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `nums` int(10) unsigned DEFAULT '0' COMMENT '����',
  `ip` varchar(15) DEFAULT '' COMMENT 'IP',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `sid` (`sid`),
  KEY `dir` (`dir`)
) ENGINE=MyISAM AUTO_INCREMENT=126 DEFAULT CHARSET=gbk COMMENT='���Ѽ�¼��';

#
# TABLE STRUCTURE FOR: ms_tags
#

DROP TABLE IF EXISTS ms_tags;

CREATE TABLE `ms_tags` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT '' COMMENT '����',
  `fid` int(8) unsigned DEFAULT '0' COMMENT '����ID',
  `xid` int(3) unsigned DEFAULT '0' COMMENT '����ID',
  `hits` int(10) unsigned DEFAULT '0' COMMENT '����',
  PRIMARY KEY (`id`),
  KEY `fid` (`fid`),
  KEY `xid` (`xid`),
  KEY `hits` (`hits`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=gbk COMMENT='ȫվTAGS��ǩ��';

#
# TABLE STRUCTURE FOR: ms_user
#

DROP TABLE IF EXISTS ms_user;

CREATE TABLE `ms_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT '' COMMENT '�˺�',
  `uid` bigint(20) DEFAULT '0' COMMENT 'UCID',
  `tid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ��Ƽ�',
  `sid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ�����',
  `yid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ񼤻�',
  `zid` int(6) unsigned DEFAULT '1' COMMENT '��Ա��ID',
  `rzid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ���֤',
  `pass` varchar(32) DEFAULT '' COMMENT '����',
  `code` varchar(6) DEFAULT '' COMMENT '��Կ',
  `logip` varchar(20) DEFAULT '' COMMENT '��¼IP',
  `lognum` smallint(5) unsigned DEFAULT '0' COMMENT '��¼����',
  `logtime` int(10) unsigned DEFAULT '0' COMMENT '��¼ʱ��',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ע��ʱ��',
  `zutime` int(10) unsigned DEFAULT '0' COMMENT '��Ա�鵽��ʱ��',
  `qq` varchar(50) DEFAULT '' COMMENT 'QQ',
  `tel` varchar(15) DEFAULT '' COMMENT '�绰',
  `sex` tinyint(1) DEFAULT '0' COMMENT '�Ա�',
  `city` varchar(30) DEFAULT '' COMMENT '����',
  `email` varchar(50) DEFAULT '' COMMENT '����',
  `logo` varchar(255) DEFAULT '' COMMENT 'ͷ��',
  `nichen` varchar(50) DEFAULT '' COMMENT '�ǳ�',
  `cion` int(10) unsigned DEFAULT '0' COMMENT '���',
  `rmb` decimal(10,2) DEFAULT '0.00' COMMENT '��Ǯ',
  `vip` tinyint(1) unsigned DEFAULT '0' COMMENT '�Ƿ�VIP',
  `viptime` int(10) unsigned DEFAULT '0' COMMENT 'VIP����ʱ��',
  `qianm` varchar(255) DEFAULT '' COMMENT 'ǩ��',
  `zx` tinyint(1) DEFAULT '0' COMMENT '����״̬',
  `logms` int(10) unsigned DEFAULT '0' COMMENT '������ʱ��',
  `qdts` smallint(5) unsigned DEFAULT '0' COMMENT 'ǩ������',
  `qdtime` int(10) unsigned DEFAULT '0' COMMENT 'ǩ��ʱ��',
  `level` int(6) unsigned DEFAULT '0' COMMENT '�ȼ�',
  `jinyan` int(10) unsigned DEFAULT '0' COMMENT '����',
  `hits` int(10) unsigned DEFAULT '0' COMMENT '�ռ�����',
  `yhits` int(10) unsigned DEFAULT '0' COMMENT '�ռ�������',
  `zhits` int(10) unsigned DEFAULT '0' COMMENT '�ռ�������',
  `rhits` int(10) unsigned DEFAULT '0' COMMENT '�ռ�������',
  `zanhits` int(10) unsigned DEFAULT '0' COMMENT '��������',
  `addhits` int(10) unsigned DEFAULT '0' COMMENT '�������ݴ���',
  `regip` varchar(20) DEFAULT '' COMMENT 'ע��IP',
  `skins` varchar(128) DEFAULT '' COMMENT 'ģ��·��',
  `bgpic` varchar(255) DEFAULT '' COMMENT '��ҳ����',
  `dlid` mediumint(5) DEFAULT '0' COMMENT '����ID',
  `dlrz` mediumint(5) DEFAULT '0' COMMENT '������֤',
  `dlcion` mediumint(5) DEFAULT '0' COMMENT '�������ֽ������',
  `vipzid` varchar(20) DEFAULT '' COMMENT '��������Ա��',
  `vipzidtime` varchar(20) DEFAULT '' COMMENT '�������·�',
  `vipjid` int(10) unsigned DEFAULT '0' COMMENT '�������',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `tid` (`tid`),
  KEY `sid` (`sid`),
  KEY `yid` (`yid`),
  KEY `rzid` (`rzid`),
  KEY `sex` (`sex`),
  KEY `zx` (`zx`),
  KEY `hits` (`hits`),
  KEY `yhits` (`yhits`),
  KEY `zhits` (`zhits`),
  KEY `rhits` (`rhits`),
  KEY `addhits` (`addhits`),
  KEY `user_yid_id` (`yid`,`id`)
) ENGINE=MyISAM AUTO_INCREMENT=78 DEFAULT CHARSET=gbk COMMENT='��Ա��';

#
# TABLE STRUCTURE FOR: ms_user_log
#

DROP TABLE IF EXISTS ms_user_log;

CREATE TABLE `ms_user_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `loginip` varchar(50) DEFAULT '' COMMENT '��¼IP',
  `logintime` int(10) unsigned DEFAULT '0' COMMENT '��¼ʱ��',
  `useragent` varchar(255) DEFAULT '' COMMENT '�ͻ�����Ϣ',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=375 DEFAULT CHARSET=gbk COMMENT='��Ա��¼��';

#
# TABLE STRUCTURE FOR: ms_userlevel
#

DROP TABLE IF EXISTS ms_userlevel;

CREATE TABLE `ms_userlevel` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `xid` smallint(5) DEFAULT '0' COMMENT '����ID',
  `name` varchar(100) DEFAULT '' COMMENT '����',
  `stars` smallint(3) DEFAULT '0' COMMENT '��������',
  `jinyan` int(10) unsigned DEFAULT '0' COMMENT '���辭��',
  PRIMARY KEY (`id`),
  KEY `xid` (`xid`),
  KEY `stars` (`stars`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=gbk COMMENT='��Ա�ȼ���';

#
# TABLE STRUCTURE FOR: ms_useroauth
#

DROP TABLE IF EXISTS ms_useroauth;

CREATE TABLE `ms_useroauth` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cid` tinyint(2) DEFAULT '0' COMMENT '����ID',
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `csid` int(10) unsigned DEFAULT '0' COMMENT 'cscms�ٷ�����ID',
  `nickname` varchar(255) DEFAULT '' COMMENT '��Ȩ�����ǳ�',
  `avatar` varchar(255) DEFAULT '' COMMENT '��Ȩ����ͷ���ַ',
  `oid` varchar(255) DEFAULT '' COMMENT '��Ȩ����ID',
  `access_token` varchar(255) DEFAULT '' COMMENT '��Ȩtoken',
  `refresh_token` varchar(255) DEFAULT '' COMMENT '��Ȩˢ��token',
  `expire_at` int(10) unsigned DEFAULT '0' COMMENT '��Ȩ����ʱ��',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `csid` (`csid`),
  KEY `cid` (`cid`),
  KEY `oid` (`oid`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk COMMENT='��ԱOAuth2��Ȩ��';

#
# TABLE STRUCTURE FOR: ms_userzu
#

DROP TABLE IF EXISTS ms_userzu;

CREATE TABLE `ms_userzu` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT '' COMMENT '����',
  `xid` smallint(5) DEFAULT '0' COMMENT '����ID',
  `color` varchar(10) DEFAULT '' COMMENT '������ɫ',
  `pic` varchar(255) DEFAULT '' COMMENT '��ͼ��',
  `info` varchar(255) DEFAULT '' COMMENT '����',
  `cion_y` int(10) unsigned DEFAULT '0' COMMENT '������',
  `cion_m` int(10) unsigned DEFAULT '0' COMMENT '���½��',
  `cion_d` int(10) unsigned DEFAULT '0' COMMENT '������',
  `fid` tinyint(1) DEFAULT '0' COMMENT '�ϴ�����Ȩ��',
  `aid` tinyint(1) DEFAULT '0' COMMENT '��������Ȩ��',
  `sid` tinyint(1) DEFAULT '0' COMMENT '�����������',
  `vid` tinyint(1) DEFAULT '0' COMMENT '��������Ȩ��',
  `mid` tinyint(1) DEFAULT '0' COMMENT '����˽��Ȩ��',
  `did` tinyint(1) DEFAULT '0' COMMENT '�������Ȩ��',
  PRIMARY KEY (`id`),
  KEY `xid` (`xid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=gbk COMMENT='��Ա���';

#
# TABLE STRUCTURE FOR: ms_vod
#

DROP TABLE IF EXISTS ms_vod;

CREATE TABLE `ms_vod` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT '' COMMENT '����',
  `bname` varchar(64) DEFAULT '' COMMENT '����������',
  `color` varchar(10) DEFAULT '' COMMENT '������ɫ',
  `tags` varchar(255) DEFAULT '' COMMENT 'TAGS��ǩ',
  `type` varchar(255) DEFAULT '' COMMENT '�������',
  `pic` varchar(255) DEFAULT '' COMMENT '��ƵͼƬ',
  `pic2` varchar(255) DEFAULT '' COMMENT '�õ�ͼƬ',
  `cid` mediumint(5) DEFAULT '0' COMMENT '����ID',
  `tid` mediumint(5) DEFAULT '0' COMMENT 'ר��ID',
  `remark` varchar(32) DEFAULT '���' COMMENT '����״̬',
  `zhuyan` varchar(128) DEFAULT '' COMMENT '����',
  `daoyan` varchar(128) DEFAULT '' COMMENT '����',
  `year` varchar(64) DEFAULT '' COMMENT '��ӳʱ��',
  `yuyan` varchar(64) DEFAULT '' COMMENT '����',
  `diqu` varchar(64) DEFAULT '' COMMENT '����',
  `reco` tinyint(1) DEFAULT '0' COMMENT '�Ƽ��Ǽ�',
  `yid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ�����',
  `hid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ����վ',
  `singerid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `hits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `shits` int(10) unsigned DEFAULT '0' COMMENT '�ղ�����',
  `xhits` int(10) unsigned DEFAULT '0' COMMENT '��������',
  `yhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `zhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `rhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `dhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `chits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `phits` int(10) unsigned DEFAULT '0' COMMENT '���ִ���',
  `pfen` varchar(20) DEFAULT '0' COMMENT '��������',
  `cion` mediumint(5) DEFAULT '0' COMMENT '�ۿ���Ҫ���',
  `dcion` mediumint(5) DEFAULT '0' COMMENT '������Ҫ���',
  `vip` mediumint(5) DEFAULT '0' COMMENT '�ɹۿ���',
  `level` mediumint(5) DEFAULT '0' COMMENT '�ɹۿ��ȼ�',
  `info` varchar(64) DEFAULT '' COMMENT '�򵥽���',
  `text` text COMMENT '��ϸ����',
  `purl` text COMMENT '���ŵ�ַ',
  `durl` text COMMENT '���ص�ַ',
  `playtime` int(10) unsigned DEFAULT '0' COMMENT '����ʱ��',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT '����ʱ��',
  `skins` varchar(64) DEFAULT 'play.html' COMMENT 'Ĭ��ģ��',
  `title` varchar(64) DEFAULT '' COMMENT 'SEO����',
  `keywords` varchar(150) DEFAULT '' COMMENT 'SEO�ؼ���',
  `description` varchar(200) DEFAULT '' COMMENT 'SEO����',
  `fid` mediumint(5) DEFAULT '0' COMMENT '��������ID',
  PRIMARY KEY (`id`),
  KEY `singerid` (`singerid`),
  KEY `pfen` (`pfen`),
  KEY `uid` (`uid`),
  KEY `cid` (`cid`),
  KEY `tid` (`tid`),
  KEY `hid` (`hid`),
  KEY `yid` (`yid`),
  KEY `reco` (`reco`),
  KEY `hits` (`hits`),
  KEY `yhits` (`yhits`),
  KEY `zhits` (`zhits`),
  KEY `rhits` (`rhits`),
  KEY `dhits` (`dhits`),
  KEY `chits` (`chits`),
  KEY `vod_hid_addtime` (`hid`,`addtime`),
  KEY `vod_cid_yid_hid_id` (`yid`,`hid`,`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1801 DEFAULT CHARSET=gbk COMMENT='��Ƶ��';

#
# TABLE STRUCTURE FOR: ms_vod_fav
#

DROP TABLE IF EXISTS ms_vod_fav;

CREATE TABLE `ms_vod_fav` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sid` tinyint(1) DEFAULT '0' COMMENT '����ID',
  `name` varchar(64) DEFAULT '' COMMENT '��������',
  `cid` mediumint(5) unsigned DEFAULT '0' COMMENT '���ݷ���ID',
  `did` int(10) unsigned DEFAULT '0' COMMENT '����ID',
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `sid` (`sid`),
  KEY `cid` (`cid`),
  KEY `did` (`did`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=gbk COMMENT='��Ƶ�ղؼ�¼';

#
# TABLE STRUCTURE FOR: ms_vod_list
#

DROP TABLE IF EXISTS ms_vod_list;

CREATE TABLE `ms_vod_list` (
  `id` mediumint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT '' COMMENT '����',
  `bname` varchar(30) DEFAULT '' COMMENT 'Ӣ�ı���',
  `fid` tinyint(1) DEFAULT '0' COMMENT '�ϼ�ID',
  `xid` tinyint(1) DEFAULT '0' COMMENT '����ID',
  `yid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ���ʾ',
  `skins` varchar(64) DEFAULT 'list.html' COMMENT '����ģ��',
  `skins2` varchar(64) DEFAULT 'show.html' COMMENT '����ģ��',
  `skins3` varchar(64) DEFAULT 'play.html' COMMENT '����ģ��',
  `title` varchar(64) DEFAULT '' COMMENT 'SEO����',
  `keywords` varchar(150) DEFAULT '' COMMENT 'SEO�ؼ���',
  `description` varchar(200) DEFAULT '' COMMENT 'SEO����',
  PRIMARY KEY (`id`),
  KEY `xid` (`xid`),
  KEY `yid` (`yid`),
  KEY `fid` (`fid`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=gbk COMMENT='��Ƶ�����';

#
# TABLE STRUCTURE FOR: ms_vod_look
#

DROP TABLE IF EXISTS ms_vod_look;

CREATE TABLE `ms_vod_look` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sid` tinyint(1) DEFAULT '0' COMMENT '����ID',
  `name` varchar(64) DEFAULT '' COMMENT '��Ƶ����',
  `cid` mediumint(5) unsigned DEFAULT '0' COMMENT '��Ƶ����ID',
  `did` varchar(128) DEFAULT '' COMMENT '��ƵID',
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `cion` int(10) DEFAULT '0' COMMENT '�۳����',
  `ip` varchar(20) DEFAULT '' COMMENT '�ۿ�IP',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `sid` (`sid`),
  KEY `cid` (`cid`),
  KEY `did` (`did`)
) ENGINE=MyISAM AUTO_INCREMENT=1607 DEFAULT CHARSET=gbk COMMENT='��Ƶ�ۿ����ؼ�¼';

#
# TABLE STRUCTURE FOR: ms_vod_server
#

DROP TABLE IF EXISTS ms_vod_server;

CREATE TABLE `ms_vod_server` (
  `id` mediumint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT '' COMMENT '����',
  `purl` varchar(255) DEFAULT '' COMMENT '������ַ',
  `durl` varchar(255) DEFAULT '' COMMENT '���ص�ַ',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=gbk COMMENT='��Ƶ��������';

#
# TABLE STRUCTURE FOR: ms_vod_topic
#

DROP TABLE IF EXISTS ms_vod_topic;

CREATE TABLE `ms_vod_topic` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT '' COMMENT '����',
  `bname` varchar(20) DEFAULT '' COMMENT '����',
  `pic` varchar(255) DEFAULT '' COMMENT 'ͼƬ',
  `toppic` varchar(255) DEFAULT '' COMMENT '����ͼƬ',
  `tid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ��Ƽ�',
  `yid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ����',
  `hits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `yhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `zhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `rhits` int(10) unsigned DEFAULT '0' COMMENT '������',
  `shits` int(10) unsigned DEFAULT '0' COMMENT '�ղ�����',
  `neir` text COMMENT '����',
  `skins` varchar(64) DEFAULT 'topic.html' COMMENT 'Ĭ��ģ��',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  `title` varchar(64) DEFAULT '' COMMENT 'SEO����',
  `keywords` varchar(150) DEFAULT '' COMMENT 'SEO�ؼ���',
  `description` varchar(200) DEFAULT '' COMMENT 'SEO����',
  PRIMARY KEY (`id`),
  KEY `tid` (`tid`),
  KEY `yid` (`yid`),
  KEY `hits` (`hits`),
  KEY `yhits` (`yhits`),
  KEY `zhits` (`zhits`),
  KEY `rhits` (`rhits`),
  KEY `shits` (`shits`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=gbk COMMENT='��Ƶר���';

#
# TABLE STRUCTURE FOR: ms_vod_type
#

DROP TABLE IF EXISTS ms_vod_type;

CREATE TABLE `ms_vod_type` (
  `id` mediumint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT '' COMMENT '����',
  `cid` mediumint(5) DEFAULT '0' COMMENT '����ID',
  `xid` tinyint(1) DEFAULT '0' COMMENT '����ID',
  `yid` tinyint(1) DEFAULT '0' COMMENT '�Ƿ���ʾ',
  PRIMARY KEY (`id`),
  KEY `xid` (`xid`),
  KEY `yid` (`yid`),
  KEY `cid` (`cid`)
) ENGINE=MyISAM AUTO_INCREMENT=59 DEFAULT CHARSET=gbk COMMENT='��Ƶ�����';

#
# TABLE STRUCTURE FOR: ms_web_pay
#

DROP TABLE IF EXISTS ms_web_pay;

CREATE TABLE `ms_web_pay` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `mid` int(10) unsigned DEFAULT '0' COMMENT 'ģ��ΨһID',
  `name` varchar(255) DEFAULT '' COMMENT 'ģ�����',
  `uid` int(10) unsigned DEFAULT '0' COMMENT '��ԱID',
  `cion` int(10) unsigned DEFAULT '0' COMMENT '�۳����',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`id`),
  KEY `mid` (`mid`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk COMMENT='ģ��ʹ�ü�¼��';

#
# TABLE STRUCTURE FOR: ms_yklist
#

DROP TABLE IF EXISTS ms_yklist;

CREATE TABLE `ms_yklist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(64) DEFAULT '' COMMENT '�ο�IP',
  `uid` int(11) DEFAULT '0' COMMENT '��ԱID',
  `bankuai` varchar(64) DEFAULT '' COMMENT '���',
  `nid` int(11) DEFAULT '0' COMMENT '����ID',
  `addtime` int(10) unsigned DEFAULT '0' COMMENT 'ʱ��',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2866 DEFAULT CHARSET=gbk;

